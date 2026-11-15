import React, { useState } from 'react';
import Config from "showhide.config.ts";
import HIDESHOW from "HIDESHOW.tsx";

interface ShowHideProps {
  children?: React.ReactNode;
  className?: string;
}

const ShowHide: React.FC<ShowHideProps> = ({ children, className }) => {
  const [visible, setVisible] = useState(false);

  const showhide = (state: boolean) => {
    setVisible(state);
  };

  return (
    <div className={className}>
      <button type="button" className="show" onClick={() => showhide(true)}>
        👁️
      </button>
      <button type="button" className="hide" onClick={() => showhide(false)}>
        🤫
      </button>
      {visible && children}
    </div>
  );
};

export default ShowHide;