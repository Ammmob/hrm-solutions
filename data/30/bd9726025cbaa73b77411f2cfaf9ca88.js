callback({
  "levelNumber": 30,
  "size": 79,
  "steps": 95,
  "successRatio": 1,
  "type": "exploit",
  "author": "Otto42",
  "hash": "bd9726025cbaa73b77411f2cfaf9ca88",
  "path": "30-String-Storage-Floor-7.203/79.101.exploit-Otto42.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 30-String-Storage-Floor - Size 79/7 - Speed 101/203 --\n\n-- This solution is an exploit; the message is known in advance.\n-- There are random numbers of X's in the places in the message they occur, so\n-- it fast forwards the message to them and uses three loops to output the\n-- correct number of X's.\n\n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 2\n    OUTBOX  \na:\n    COPYFROM [24]\n    JUMPZ    b\n    OUTBOX  \n    BUMPUP   24\n    JUMP     a\nb:\n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 17\n    OUTBOX  \n    COPYFROM 18\n    OUTBOX  \n    COPYFROM 11\n    OUTBOX  \n    COPYFROM 12\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 14\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \nc:\n    COPYFROM [24]\n    JUMPZ    d\n    OUTBOX  \n    BUMPUP   24\n    JUMP     c\nd:\n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    INBOX   \n    COPYTO   24\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 14\n    OUTBOX  \n    COPYFROM 15\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 17\n    OUTBOX  \n    COPYFROM 18\n    OUTBOX  \ne:\n    COPYFROM [24]\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   24\n    JUMP     e\nf:\n\n"
});