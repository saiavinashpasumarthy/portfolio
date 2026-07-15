import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const move=(e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
  return (
    <div
      className="spotlight-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    />
  );
}