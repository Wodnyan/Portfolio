import React, { useRef } from "react";
import useDrag from "../hooks/useDrag";
import { connect, useDispatch } from "react-redux";
import { REMOVE_WINDOW, TOGGLE_WINDOW } from "../redux/actions/windowsActions";

interface Props {
  id: number;
  windowName: string;
  children: React.ReactNode;
  show: boolean;
  minimizeBtn?: boolean;
  maximizeBtn?: boolean;
}
const Window: React.FC<Props> = ({
  id,
  maximizeBtn,
  minimizeBtn,
  windowName,
  show,
  children,
}) => {
  const dragRef = useRef(null);
  const { handleRef } = useDrag(dragRef);
  const dispatch = useDispatch();

  const closeWindow = () => {
    dispatch(REMOVE_WINDOW(id));
  };

  const minimizeWindow = () => {
    dispatch(TOGGLE_WINDOW(id));
  };

  return (
    <div
      style={{ display: show ? "block" : "none" }}
      ref={dragRef}
      className="window"
    >
      <div draggable={false} ref={handleRef} className="top-bar">
        <div className="top-bar__info">
          <p>{windowName}</p>
        </div>
        <div className="top-bar__btn-group">
          {minimizeBtn && (
            <i
              onClick={minimizeWindow}
              className="fas fa-window-minimize top-bar__btn"
            ></i>
          )}
          {maximizeBtn && (
            <i className="far fa-window-maximize top-bar__btn"></i>
          )}
          <i onClick={closeWindow} className="fas fa-times top-bar__btn"></i>
        </div>
      </div>
      {children}
    </div>
  );
};

export default connect(null, { REMOVE_WINDOW, TOGGLE_WINDOW })(Window);
