callback({
  "levelNumber": 36,
  "size": 112,
  "steps": 26,
  "successRatio": 0.15,
  "type": "specific",
  "author": "Mygod",
  "hash": "58bc2c8a8c22601105bc9e29b8e5f391",
  "path": "36-Alphabetizer-39.109/112.32.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 36-Alphabetizer - SIZE 112/39 - SPEED 32/109 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- Based on: 98.34-ocoss.asm\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    a\r\n    COPYTO   2\r\n    INBOX   \r\n    COPYTO   3\r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   4\r\n    INBOX   \r\n    COMMENT  1\r\n    INBOX   \r\n    COPYTO   20\r\n    SUB      0\r\n    JUMPN    k\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    COPYTO   20\r\n    SUB      2\r\n    JUMPZ    i\r\n    JUMPN    k\r\n    COPYFROM 2\r\n    OUTBOX  \r\ng:\r\n    COPYFROM 3\r\n    OUTBOX  \r\nh:\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    JUMP     end\r\n    COMMENT  0\r\na:\r\n    INBOX   \r\n    COPYTO   20\r\n    SUB      0\r\n    JUMPN    k\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    JUMP     end\r\n    COMMENT  2\r\nb:\r\n    INBOX   \r\n    COPYTO   20\r\n    SUB      0\r\n    JUMPZ    d\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    JUMP     end\r\nd:\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    COPYTO   20\r\n    SUB      2\r\n    JUMPZ    e\r\n    JUMPN    k\r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    JUMP     end\r\ne:\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   20\r\n    SUB      3\r\n    JUMPN    k\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    JUMP     end\r\nj:\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    COPYTO   20\r\n    COPYFROM 4\r\n    SUB      20\r\n    JUMPN    h\r\n    COMMENT  4\r\nk:\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    end\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\ni:\r\n    COPYFROM 20\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   20\r\n    SUB      3\r\n    JUMPZ    j\r\n    JUMPN    k\r\n    COPYFROM 3\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COMMENT  3\r\nend:\r\n\r\n\r\nDEFINE COMMENT 0\r\neJwTZmBgMEnrigvMZQifUfYxfFHdipjlTQFJF1v2Ziu0Spc9aTZo5WwqnLi1NnMRT6n4jrDC/Xvv5m3Y\r\ndyp/8oFVpS0H0/v275WdtGj/5akRRxhGwSgYBUMOAAD2ayTa;\r\n\r\nDEFINE COMMENT 1\r\neJwTYmBgCK5LcAiuU0mtbXAv3tVoWfKuuyn/4QSt0mdTltUKTL/RJTC9YcKzKZLTj3Qumfekecm8rbVv\r\nZwK1MSyqe+1+reOXm/uUs54Mo2AUjIIhCQCkyCJP;\r\n\r\nDEFINE COMMENT 2\r\neJzjZmBgUM/mcEvJWejTl3epakdBR31qrUGrWmdVA1CKYX9rvn1B69NVv9u2n2MYBaNgFAw7AAD3zxHc\r\n;\r\n\r\nDEFINE COMMENT 3\r\neJyzZWBgUPbs7//obzZ1TbjZVK24/n79JJaO3clVDVwpWqUPEvdmv41xTG6PjEv8FhyXWO67LifBS6t0\r\nuvv0OjnXNb0NLvdmnXdhWrnKTW37FY/JB7p8PI8u9Pc86hoSccQ8csM+oPEMq0pF01yKXKfo5Dtv1cmX\r\nXy5ZcG+WS9HcvudlW2rWV2qV3qouLrhfPz/3d9v83GsdliVHOg9Xb+xSbNvYZTZ1VnvdRpAZG1bwlLss\r\n5Cn/MEex7cZMrhl/p39e+Xf6r52vZyzaHzTH+pjLQs+jv5Ys2p+4QnxH3fqDc1ZsLJw4dZNw+6xttkaz\r\ntm3wjtsal9i8+cLs5s1BWxhGwSgYBXAAAPx4dXM;\r\n\r\nDEFINE COMMENT 4\r\neJwzZ2BgKPflcJvu/mtnl8+vnUAug1bcnxlJ0ZmLzCPrNr6IEN9xLXLR/sNRLQcl4iOO1CWlH3ZP3bBv\r\ndqbz1rLsVevUs6MWr8v4M4MrRXL62SSuGSD9KhVcM1yKZq8PK/y1c2lhxJHJRfwnzxd/PNVa/vj0/8qP\r\npybUtxzMbny9a2oz08qpzd5Lljctmber8cJssdq3MwUr783aWzJ1Psgcg4khkyX6zu1Z0vb/P4iv0Pr/\r\nv0Jrx6eX7Y7XTvauWrekX355zqS2BZenZi66MVNwhejsoC3HZonv8J3xayf3ZIhfRsEoGAX4AQBoBG18\r\n;\r\n\r\nDEFINE LABEL 20\r\neJxjZ2BgmFzElh7bdmc3kMkwq100TbPGdQp74bk9DKNgFIyCYQ8A1eUJEA;\r\n\r\n"
});