callback({
  "levelNumber": 31,
  "size": 13,
  "steps": 109,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "gjareno",
  "hash": "7f4230b4876f41d79d75e510ffc83834",
  "path": "31-String-Reverse-11.122/13.109-gjareno.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 13/11 - SPEED 109/122 --\n-- The solution assumes there's no empty chains.  And the game accept it.\n\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX\nb:\nc:\n    INBOX\n    JUMPZ    d\n    COPYTO   [14]\n    BUMPUP   14\n    JUMP     c\nd:\ne:\n    BUMPDN   14\n    JUMPZ    a\n    COPYFROM [14]\n    OUTBOX\n    JUMP     e\n"
});