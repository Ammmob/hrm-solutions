callback({
  "levelNumber": 32,
  "size": 16,
  "steps": 392,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "michiexile",
  "hash": "b32f0e60308334b48f1c95bc218b307d",
  "path": "32-Inventory-Report-16.393/16.392-michiexile.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 16/16 - SPEED 392/393 --\n\nsetup:\nCOPYFROM 14\nCOPYTO 15\nBUMPDN 15\nCOPYTO 16\nstart:\nINBOX\nCOPYTO 19\ncount:\nBUMPUP 16\nloop:\nBUMPUP 15\nCOPYFROM [15]\nJUMPZ out\nSUB 19\nJUMPZ count\nJUMP loop\nout:\nCOPYFROM 16\nOUTBOX\nJUMP setup\n"
});