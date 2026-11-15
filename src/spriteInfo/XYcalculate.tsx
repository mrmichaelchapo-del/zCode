import { useState } from "react";
import XYhandler from "./xyhandler.tsx";

export default function XY() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <>
      <p>x:</p>
      <input
        type="text"
        placeholder="0"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <p>y:</p>
      <input
        type="text"
        placeholder="0"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />
    </>
  );
}