import React, { useRef } from "react";
import useDrag from "../hooks/useDrag";

const Window: React.FC = () => {
  const dragRef = useRef(null);
  const handleRef = useRef(null);
  const drag = useDrag(dragRef, handleRef);

  return (
    <div ref={dragRef} className="window">
      <div draggable={false} ref={handleRef} className="top-bar"></div>
      <i className="fas fa-lock-open"></i>
    </div>
  );
};

export default Window;
