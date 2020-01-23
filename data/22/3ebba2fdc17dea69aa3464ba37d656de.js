callback({
  "levelNumber": 22,
  "size": 95,
  "steps": 47,
  "successRatio": 0.4,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "viamodulo",
  "hash": "3ebba2fdc17dea69aa3464ba37d656de",
  "path": "22-Fibonacci-Visitor-19.156/95.47.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 22-Fibonacci-Visitor - SIZE 95/19 - SPEED 47/156 --\n\n-- This solution is level-specific (patterned and quantity-limited input).\n-- This solution assumes that there are 2 inputs : \n--  \tone of them is between [5, 13),\n--      the other is between   [13, 33)\n\n--   Based on 149.51.specific-Mygod.asm\n\n    BUMPUP   9\n    COPYTO   8\n    BUMPUP   8\n    ADD      9\n    COPYTO   7\n    ADD      8\n    COPYTO   6\n    ADD      7\n    COPYTO   5\n    ADD      6\n    COPYTO   4\n    ADD      5\n    COPYTO   3\n\t\n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n\t\n    INBOX\n    SUB      4\n    JUMPN\t a12\n    ADD\t\t 4\n    SUB\t\t 3\n\tJUMPN    a20\n\t\n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n\t\n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n\tINBOX\n\tSUB      5\n\tJUMPN \t end\n\tCOPYFROM 5\n\tOUTBOX\n\tJUMP \t end\n\t\na20:\n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX   \n\t\n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX  \n\tINBOX\n\tSUB      5\n\tJUMPN \t end\n\tCOPYFROM 5\n\tOUTBOX\n\tJUMP \t end\n\t\na12:\n\tADD\t\t 4\n\tSUB\t\t 5\n\tJUMPN    a567\n\t\na8:\n    COPYFROM 5\n    OUTBOX \na567:\n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 9\n    OUTBOX  \n    COPYFROM 8\n    OUTBOX  \n    COPYFROM 7\n    OUTBOX  \n    COPYFROM 6\n    OUTBOX\n    COPYFROM 5\n    OUTBOX  \n    COPYFROM 4\n    OUTBOX  \n    INBOX \n    SUB \t 3\n    JUMPN    end\n    COPYFROM 3\n    OUTBOX\nend:\n"
});