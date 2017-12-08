callback({
  "levelNumber": 20,
  "size": 93,
  "steps": 67,
  "successRatio": 1,
  "type": "specific",
  "legal": false,
  "worky": true,
  "author": "mschordan",
  "hash": "aa2c752484feccb2affc194815f685e6",
  "path": "20-Multiplication-Workshop-15.109/93.67.specific-mschordan.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 93/15 - SPEED 67/109 --\n\n-- This solution is level-specific (quality-limited input) and assumes input\n-- values of 0-9.\n-- Based on 161.70.specific-mschordan.asm\n\n    BUMPUP   9\n    BUMPUP   9\n\n    INBOX   \n    JUMPZ    out1\n    COPYTO   0\n    INBOX   \n    JUMPZ    out\n\n    SUB      9\n    JUMPN    b1\n    JUMPZ    b2\n    SUB      9\n    JUMPN    b3\n    JUMPZ    b4\n    SUB      9\n    JUMPN    b5\n    JUMPZ    b6\n    SUB      9\n    JUMPN    b7\n    JUMPZ    b8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\nout:\n    OUTBOX\na:\n    INBOX   \n    JUMPZ    out1\n    COPYTO   0\n    INBOX   \n    JUMPZ    out\n\n    SUB      9\n    JUMPN    b1\n    JUMPZ    b2\n    SUB      9\n    JUMPN    b3\n    JUMPZ    b4\n    SUB      9\n    JUMPN    b5\n    JUMPZ    b6\n    SUB      9\n    JUMPN    b7\n    JUMPZ    b8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     out\n\nout1:\n    OUTBOX  \n    INBOX   \n    JUMP     a\n\nb1:\n    COPYFROM 0\n    JUMP     out\nb2:\n    COPYFROM 0\n    ADD      0\n    JUMP     out\nb3:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     out\nb4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     out\nb5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     out\nb6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     out\nb7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     out\nb8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     out\n\n"
});