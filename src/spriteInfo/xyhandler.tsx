import { useState, useCallback } from "react";

export function useXYDirection(initial = { x: 0, y: 0 }) {
  const [pos, setPos] = useState(initial);
  const move = useCallback((dx: number, dy: number) => setPos(p => ({ x: p.x + dx, y: p.y + dy })), []);
  return { pos, move, up: (n = 1) => move(0, -n), down: (n = 1) => move(0, n),
    left: (n = 1) => move(-n, 0), right: (n = 1) => move(n, 0),
    reset: () => setPos(initial), dirTo: (tx: number, ty: number) => ({ x: tx - pos.x, y: ty - pos.y }) };
}