callback({
  "levelNumber": 13,
  "size": 29,
  "steps": 16,
  "successRatio": 0.1,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Mygod",
  "hash": "b540b29a5a1dcca477d3478f201e55a3",
  "path": "13-Equalization-Room-9.27/29.16.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 13-Equalization-Room - SIZE 29/9 - SPEED 16/27 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    a\r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    b\r\n    JUMP     c\r\na:\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPZ    b\r\n    JUMP     c\r\nb:\r\n    COPYFROM 0\r\n    OUTBOX  \r\nc:\r\n    INBOX   \r\n    OUTBOX  \r\n\r\n\r\n"
});