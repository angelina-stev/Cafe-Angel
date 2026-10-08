import { ArrowLeft, Coffee } from "lucide-react";

export default function CafeHeader({ onBack }) {
  return (
    <header className="cafe-header">
      <div className="cafe-brand">
        <div className="cafe-brand__icon"><Coffee size={20} /></div>
        <div>
          <strong>CAFE ANGEL</strong>
          <span>A refined coffee experience · Since 2026</span>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> Pintu
      </button>
    </header>
  );
}
