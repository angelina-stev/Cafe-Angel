import { ReceiptText } from "lucide-react";
import { rupiah } from "../utils/format";

export default function Receipt({ data, items, total, submitted }) {
  return (
    <div className={`receipt ${submitted ? "receipt--done" : ""}`}>
      <div className="receipt-top"><ReceiptText size={22} /><span>NOTA PESANAN</span></div>
      <h3>CAFE ANGEL</h3>
      <p className="receipt-address">Jl. Merdeka No. 12 · Medan</p>
      <div className="receipt-line" />

      <div className="receipt-meta">
        <span>Nama <b>{data.nama.trim() || "........"}</b></span>
        <span>Meja <b>{data.meja.trim() || "...."}</b></span>
        {submitted && <><span>Antrean <b>{submitted.nomor}</b></span><span>Waktu <b>{submitted.waktu}</b></span></>}
      </div>

      <div className="receipt-line" />

      {items.length === 0 ? (
        <p className="receipt-empty">Your order is still empty.<br />Choose something lovely.</p>
      ) : (
        <ul className="receipt-items">
          {items.map((item) => (
            <li key={item.id}><span>{item.jumlah}x {item.nama}</span><b>{rupiah(item.harga * item.jumlah)}</b></li>
          ))}
        </ul>
      )}

      {data.catatan.trim() && <p className="receipt-note">Catatan: {data.catatan.trim()}</p>}

      <div className="receipt-line" />
      <div className="receipt-total"><span>TOTAL</span><strong>{rupiah(total)}</strong></div>
      <p className="receipt-thanks">Thank you for choosing Cafe Angel · ♡</p>
      {submitted && <div className="stamp">DITERIMA</div>}
    </div>
  );
}
