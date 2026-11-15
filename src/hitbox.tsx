import { useRef, useState, MouseEvent } from "react";

export default function Hitbox({ x = 0, y = 0, w = 50, h = 50, onClick }: {
  x?: number; y?: number; w?: number; h?: number; onClick?: (e: MouseEvent) => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ position: "absolute", left: x, top: y, width: w, height: h, cursor: "pointer",
        background: hover ? "rgba(0,255,0,0.2)" : "transparent" }} />
  );
}