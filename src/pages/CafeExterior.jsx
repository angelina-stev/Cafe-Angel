import { Sparkles } from "lucide-react";
import { useCafe } from "../context/CafeContext";
import CafeDoor from "../components/CafeDoor";
import "../styles/exterior.css";

export default function CafeExterior() {
  const { isOpen, toggleOpen, isDoorOpen } = useCafe();

  return (
    <section className={`exterior ${isDoorOpen ? "exterior--hidden" : ""}`}>
      <div className="awning">
        {Array.from({ length: 10 }).map((_, i) => <span key={i} className={i % 2 === 0 ? "awning__stripe awning__stripe--cream" : "awning__stripe"} />)}
      </div>

      <div className="sign-area">
        <div className="angel-halo" />
        <div className="brand-kicker"><Sparkles size={13} /> EST. 2026 · COFFEE & GOOD MOOD</div>
        <h1>Cafe Angel</h1>
        <p>Coffee, comfort & good mood.</p>
        <button className={`status-board ${isOpen ? "status-board--open" : "status-board--closed"}`} onClick={toggleOpen} disabled={isDoorOpen}>
          <span className="status-dot" />
          {isOpen ? "OPEN NOW" : "CLOSED"}
          <small>{isOpen ? "ketuk pintu untuk masuk" : "klik untuk membuka cafe"}</small>
        </button>
      </div>

      <CafeDoor />

      <div className="outside-footer"><span>06.00 — 22.00</span><span>•</span><span>Jl. Merdeka No. 12</span></div>
    </section>
  );
}
