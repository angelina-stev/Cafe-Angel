import { ChefHat, Send, ShoppingBag } from "lucide-react";
import { MENU } from "../data/menu";
import { rupiah } from "../utils/format";

export default function OrderForm({ data, errors, submitted, onChange, onQty, onSubmit }) {
  return (
    <form className="order-paper" onSubmit={onSubmit} noValidate>
      <div className="paper-title">
        <div>
          <span className="paper-eyebrow">PESANAN MEJA</span>
          <h3>Your Order</h3>
        </div>
        <ChefHat size={25} />
      </div>

      <div className="field-row">
        <label>
          <span>Nama kamu</span>
          <input value={data.nama} onChange={(e) => onChange("nama", e.target.value)} disabled={submitted} placeholder="Contoh: Angelina" aria-invalid={!!errors.nama} />
          {errors.nama && <small className="error">{errors.nama}</small>}
        </label>
        <label>
          <span>Nomor meja</span>
          <input value={data.meja} onChange={(e) => onChange("meja", e.target.value)} disabled={submitted} placeholder="Contoh: 4" aria-invalid={!!errors.meja} />
          {errors.meja && <small className="error">{errors.meja}</small>}
        </label>
      </div>

      <div className="menu-heading">
        <div>
          <span className="paper-eyebrow">CURATED FOR YOU</span>
          <h4>Choose your pleasure</h4>
        </div>
        <ShoppingBag size={21} />
      </div>

      <div className="menu-grid">
        {MENU.map((menu) => {
          const jumlah = data.qty[menu.id] || 0;
          return (
            <article className={`menu-card ${jumlah ? "menu-card--selected" : ""}`} key={menu.id}>
              <div className="menu-icon">{menu.ikon}</div>
              <div className="menu-info">
                <strong>{menu.nama}</strong>
                <span>{menu.ket}</span>
                <b>{rupiah(menu.harga)}</b>
              </div>
              <div className="stepper">
                <button type="button" onClick={() => onQty(menu.id, -1)} disabled={submitted || jumlah === 0}>−</button>
                <output>{jumlah}</output>
                <button type="button" onClick={() => onQty(menu.id, 1)} disabled={submitted}>+</button>
              </div>
            </article>
          );
        })}
      </div>

      {errors.menu && <p className="error menu-error">{errors.menu}</p>}

      <label className="note-field">
        <span>Special request</span>
        <textarea rows="2" value={data.catatan} onChange={(e) => onChange("catatan", e.target.value)} disabled={submitted} placeholder="Misalnya: less sweet, extra ice..." />
      </label>

      <button className="send-button" type="submit" disabled={submitted}>
        <Send size={18} /> Place my order
      </button>
    </form>
  );
}
