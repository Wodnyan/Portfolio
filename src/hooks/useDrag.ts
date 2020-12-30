import { useEffect, useRef } from "react";

const useDrag = (ref: any) => {
  const handleRef = useRef(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    let offsetX = 0;
    let offsetY = 0;
    let currentX: number;
    let currentY: number;
    let initialX: number;
    let initialY: number;

    function onMouseDown(e: React.MouseEvent) {
      initialX = e.clientX - offsetX;
      initialY = e.clientY - offsetY;
      // If there is a handler and the target isn't the handler than do nothing
      if (handleRef.current !== null && e.target !== handleRef.current) {
        return;
      }
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mousemove", onMouseMove);
    }

    function onMouseUp(this: Window, _: MouseEvent) {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(this: Window, e: MouseEvent) {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      offsetY = currentY;
      offsetX = currentX;
      target.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    target.addEventListener("mousedown", onMouseDown);

    return () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref, handleRef]);
  return { handleRef };
};

export default useDrag;
