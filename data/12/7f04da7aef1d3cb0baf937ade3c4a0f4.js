callback({
  "levelNumber": 12,
  "size": 14,
  "steps": 56,
  "successRatio": 1,
  "type": "alternative",
  "legal": true,
  "worky": true,
  "author": "nanashi-juanto",
  "hash": "7f04da7aef1d3cb0baf937ade3c4a0f4",
  "path": "12-Tetracontiplier-14.56/14.56.alternative-nanashi-juanto.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 12-Tetracontiplier - SIZE 14/14 - SPEED 56/56 --\n\n-- This approach solves for the value of 40n in the order of [n, 2n, 4n, 5n,\n-- 10n, 20n, 40n] and requires one extra memory slot.\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   1\n    ADD      1\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n"
});