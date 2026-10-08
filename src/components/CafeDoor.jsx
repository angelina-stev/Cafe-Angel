import { Coffee } from "lucide-react";
import { useCafe } from "../context/CafeContext";
import "../styles/door.css";

export default function CafeDoor() {
  const { isOpen, openDoor, isDoorOpen } = useCafe();

  return (
    <div className="door-zone">
      <div className="door-frame">
        <button className={`door ${isDoorOpen ? "door--open" : ""}`} onClick={openDoor} disabled={!isOpen} aria-label="Buka pintu Cafe Angel">
          <div className="door-window">
            <div className="door-window__shine" />
            <div className="door-window__glow" />
            <Coffee className="door-coffee" size={34} />
          </div>
          <div className="door-plaque"><span>CAFE</span><strong>ANGEL</strong></div>
          <span className="door-handle" />
          <span className="door-label">KETUK UNTUK MASUK</span>
        </button>
      </div>
      <div className="welcome-mat"><span>WELCOME</span><strong>☕</strong></div>
    </div>
  );
}
