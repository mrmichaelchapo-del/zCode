import { useState } from "react";

export default function Component() {
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