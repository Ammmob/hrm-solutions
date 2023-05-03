callback({
  "levelNumber": 35,
  "size": 48,
  "steps": 70,
  "successRatio": 0.1,
  "legal": false,
  "worky": false,
  "author": "WolfWings",
  "hash": "dddb4e15a2a871d085898ca285af6c14",
  "path": "35-Duplicate-Removal-17.167/48.70-WolfWings.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 48/17 - SPEED 70/167 --\n\n    INBOX\n    COPYTO   0\n    OUTBOX\na:\n    INBOX\n    COPYTO   1\n    SUB      0\n    JUMPZ    a\n    COPYFROM 1\n    OUTBOX\nb:\nc:\n    INBOX\n    COPYTO   2\n    SUB      0\n    JUMPZ    b\n    COPYFROM 2\n    SUB      1\n    JUMPZ    c\n    COPYFROM 2\n    OUTBOX\nd:\ne:\nf:\n    INBOX\n    COPYTO   3\n    SUB      0\n    JUMPZ    d\n    COPYFROM 3\n    SUB      1\n    JUMPZ    e\n    COPYFROM 3\n    SUB      2\n    JUMPZ    f\n    COPYFROM 3\n    OUTBOX\ng:\nh:\ni:\nj:\n    INBOX\n    COPYTO   4\n    SUB      0\n    JUMPZ    g\n    COPYFROM 4\n    SUB      1\n    JUMPZ    h\n    COPYFROM 4\n    SUB      2\n    JUMPZ    i\n    COPYFROM 4\n    SUB      3\n    JUMPZ    j\n    COPYFROM 4\n    OUTBOX\nk:\n    INBOX\n    INBOX\n    JUMP     k\n"
});