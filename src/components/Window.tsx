import React, { useRef } from "react";
import useDrag from "../hooks/useDrag";

interface Props {
  windowName: string;
  minimizeBtn?: boolean;
  maximizeBtn?: boolean;
}

const Window: React.FC<Props> = ({
  maximizeBtn,
  minimizeBtn,
  windowName,
  children,
}) => {
  const dragRef = useRef(null);
  const { handleRef } = useDrag(dragRef);

  return (
    <div ref={dragRef} className="window">
      <div draggable={false} ref={handleRef} className="top-bar">
        <div className="top-bar__info">
          <p>{windowName}</p>
        </div>
        <div className="top-bar__btn-group">
          {minimizeBtn && (
            <i className="fas fa-window-minimize top-bar__btn"></i>
          )}
          {maximizeBtn && (
            <i className="far fa-window-maximize top-bar__btn"></i>
          )}
          <i className="fas fa-times top-bar__btn"></i>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Window;
