import { useState } from "react";
import ExcitedCat from "./cat.svg";
import InvisibleHitbox from "./hitbox.svg";
import Hitbox from "./hitbox.tsx";
import HIDESHOW from "./HIDESHOW";

export default function Stage() {
  const [catClicked, setCatClicked] = useState(false);

  return (
    <div
      className="stage"
      style={{
        position: "relative",
        width: 480,
        height: 360
      }}
    >
      <HIDESHOW>
        <ExcitedCat />
      </HIDESHOW>

      <div
        onClick={() => setCatClicked(true)}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          cursor: "pointer"
        }}
      >
        <InvisibleHitbox />
      </div>

      {catClicked && (
        <p>🐱 meow</p>
      )}
    </div>
  );
}