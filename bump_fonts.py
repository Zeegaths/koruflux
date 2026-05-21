#!/usr/bin/env python3
"""
bump_fonts.py — add N px to every font-size value in the project.

Usage:
    python bump_fonts.py          # default: +3px
    python bump_fonts.py 4        # +4px
    python bump_fonts.py -2       # -2px (shrink)

Handles:
    fontSize: 13           → fontSize: 16
    fontSize: "13px"       → fontSize: "16px"
    font-size: 13px        → font-size: 16px
    clamp(42px,5vw,72px)   → clamp(45px,5vw,75px)   (px values only)
    font-size: 1.2rem       → left alone (rem values skipped)
"""

import re, sys, os
from pathlib import Path

BUMP = int(sys.argv[1]) if len(sys.argv) > 1 else 3

EXTS = {".tsx", ".ts", ".css", ".scss"}

# Skip values that are clearly not font sizes (line-height ratios, z-index, etc.)
MIN_SIZE = 8    # ignore anything below 8px (usually not a font size)
MAX_SIZE = 120  # ignore anything above 120px

def bump(m: re.Match) -> str:
    val = int(m.group(1))
    if MIN_SIZE <= val <= MAX_SIZE:
        val += BUMP
    return m.group(0).replace(m.group(1), str(val), 1)

# Pattern 1: fontSize: 13  or  fontSize:13
P_NUM = re.compile(r'\bfontSize\s*:\s*(\d+)(?!\s*[\w"])')

# Pattern 2: fontSize: "13px" or fontSize:"13px"
P_STR = re.compile(r'\bfontSize\s*:\s*"(\d+)px"')

# Pattern 3: CSS  font-size: 13px
P_CSS = re.compile(r'\bfont-size\s*:\s*(\d+)px')

# Pattern 4: clamp(42px, 5vw, 72px)  — only the px numbers inside clamp
P_CLAMP_PX = re.compile(r'(\d+)px')

def bump_clamp(m: re.Match) -> str:
    inner = m.group(0)   # e.g. "clamp(42px,5vw,72px)"
    return P_CLAMP_PX.sub(bump, inner)

P_CLAMP = re.compile(r'\bclamp\([^)]+\)')

def process(text: str) -> str:
    text = P_STR.sub(bump, text)         # "13px"  (must come before P_NUM)
    text = P_NUM.sub(bump, text)         # bare number
    text = P_CSS.sub(bump, text)         # CSS property
    text = P_CLAMP.sub(bump_clamp, text) # clamp(…) px values
    return text

root = Path(__file__).parent

changed = []
for path in root.rglob("*"):
    if path.suffix not in EXTS:
        continue
    if any(part in {".next", "node_modules", "__pycache__"} for part in path.parts):
        continue
    original = path.read_text(encoding="utf-8")
    updated  = process(original)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        changed.append(str(path.relative_to(root)))

print(f"Bumped fonts by +{BUMP}px in {len(changed)} file(s):")
for f in changed:
    print(f"  {f}")
