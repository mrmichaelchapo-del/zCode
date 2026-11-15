// HIDESHOW.tsx
import React, { useState, ReactNode } from 'react';

interface HIDESHOWProps {
  children?: ReactNode;
  className?: string;
  initialVisible?: boolean;
}

const HIDESHOW: React.FC<HIDESHOWProps> = ({
  children,
  className,
  initialVisible = true,
}) => {
  const [visible, setVisible] = useState(initialVisible);

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
      <div style={{ display: visible ? undefined : 'none' }}>{children}</div>
    </div>
  );
};

export default HIDESHOW;