callback({
  "levelNumber": 35,
  "size": 13,
  "steps": 219,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "skwasjer",
  "hash": "7ff9685a908a488548bad1d24c61fcab",
  "path": "35-Duplicate-Removal-17.167/13.219-skwasjer.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 35-Duplicate-Removal - SIZE 13/17 - SPEED 219/167 --\n\n    JUMP     b\na:\n    COPYFROM [14]\n    OUTBOX\nb:\nc:\n    BUMPUP   14\n    COPYTO   13\n    INBOX\n    COPYTO   [14]\nd:\n    BUMPDN   13\n    JUMPZ    a\n    COPYFROM [14]\n    SUB      [13]\n    JUMPZ    c\n    JUMP     d\n\n\nDEFINE LABEL 13\neJxjZWBgEOtsyhfuirgNZDJEtesZM2AB8+14PBfZXvPXs0wIbzZUi76gsyQSJN4T+93ydeC9UFM/vcQ9\n3va5tt7nyn/6yDY/C/4x9Voky3zWhK7FX1NPLlLPtp8dnb9hwuSi2Y38JSyFgsVLIsULbwUtyL3ko5XF\n41mY7u3xNfWsJ8hM+bkszjkzTrq1980O5u59FOHVqxXn2l+YvGfSzoyYeTzlgYtkmwMXbZgwc7797MQ5\nbQt0Z5xcZDX55CK2/qPzBbqtZ2Bz/ygYBaMAOwAA3NBOcw;\n\nDEFINE LABEL 14\neJzjZ2BgmNTV5nKxKyIwtFNy3Z223D0KrUYHtBt/HC6uKzvUWv58+9mS+ZtEigRXiBQ5z7tUVDUdqIUh\nqMtdnIEMYLn6ZMmrDVo9CVt2Tpu7tXTKrW2pHZLb+yskt5emzd3a5EiMGUmnZwfPORuxFsTWOz5diRx3\njIJRMAogAACFRzEs;\n"
});