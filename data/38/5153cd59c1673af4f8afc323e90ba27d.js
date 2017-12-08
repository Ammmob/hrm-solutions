callback({
  "levelNumber": 38,
  "size": 27,
  "steps": 199,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "eiTTio",
  "hash": "5153cd59c1673af4f8afc323e90ba27d",
  "path": "38-Digit-Exploder-30.165/27.199-eiTTio.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 27/30 - SPEED 199/167 --\n\n    JUMP     d\na:\n    COPYFROM 2\n    JUMPZ    b\n    OUTBOX  \nb:\n    COPYFROM 1\n    OUTBOX  \nc:\n    COPYFROM 0\n    OUTBOX  \nd:\n    INBOX   \n    COPYTO   0\n    SUB      10\n    JUMPN    c\n    COPYFROM 9\n    COPYTO   1\n    COPYTO   2\ne:\n    COPYFROM 0\n    SUB      11\n    JUMPN    f\n    COPYTO   0\n    BUMPUP   2\n    JUMP     e\nf:\ng:\n    COPYFROM 0\n    SUB      10\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   1\n    JUMP     g\n\n"
});