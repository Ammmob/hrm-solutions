callback({
  "levelNumber": 21,
  "size": 29,
  "steps": 60,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "AaronKnowles",
  "hash": "bf99cbc1ed5ff3281858094ab1322a69",
  "path": "21-Zero-Terminated-Sum-10.72/29.60-AaronKnowles.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 21-Zero-Terminated-Sum - SIZE 29/10 - SPEED 60/72 --\n\n    JUMP     h\na:\nb:\nc:\nd:\ne:\nf:\n    COPYFROM 0\ng:\n    OUTBOX  \nh:\n    INBOX   \n    JUMPZ    g\n    COPYTO   0\n    INBOX   \n    JUMPZ    f\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    e\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    d\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    c\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    b\ni:\n    ADD      0\n    COPYTO   0\n    INBOX   \n    JUMPZ    a\n    JUMP     i\n\n"
});