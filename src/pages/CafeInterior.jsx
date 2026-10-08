import { Heart } from "lucide-react";
import { useMemo, useState } from "react";
import { MENU } from "../data/menu";
import { nomorAntrean, waktuSekarang } from "../utils/format";
import { useCafe } from "../context/CafeContext";
import CafeHeader from "../components/CafeHeader";
import CafeHero from "../components/CafeHero";
import OrderForm from "../components/OrderForm";
import Receipt from "../components/Receipt";
import OrderSuccess from "../components/OrderSuccess";

const AWAL = { nama: "", meja: "", catatan: "", qty: {} };

export default function CafeInterior() {
  const { isDoorOpen, closeDoor } = useCafe();
  const [data, setData] = useState(AWAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const items = useMemo(() => MENU.filter((m) => data.qty[m.id] > 0).map((m) => ({ ...m, jumlah: data.qty[m.id] })), [data.qty]);
  const total = useMemo(() => items.reduce((sum, item) => sum + item.harga * item.jumlah, 0), [items]);

  const onChange = (key, value) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onQty = (id, delta) => setData((d) => ({ ...d, qty: { ...d.qty, [id]: Math.max(0, Math.min(20, (d.qty[id] || 0) + delta)) } }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!data.nama.trim()) next.nama = "Nama perlu diisi dulu.";
    if (!data.meja.trim()) next.meja = "Isi nomor meja atau tulis 'bungkus'.";
    if (!items.length) next.menu = "Pilih minimal satu menu.";
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted({ nomor: nomorAntrean(), waktu: waktuSekarang() });
  };

  const reset = () => { setData(AWAL); setErrors({}); setSubmitted(null); };
  const exit = () => { reset(); closeDoor(); };

  return (
    <section className={`interior ${isDoorOpen ? "interior--visible" : ""}`}>
      <CafeHeader onBack={exit} />
      <div className="interior-scroll">
        <CafeHero />
        <div className="order-layout">
          <OrderForm data={data} errors={errors} submitted={!!submitted} onChange={onChange} onQty={onQty} onSubmit={submit} />
          <aside className="receipt-wrap">
            <Receipt data={data} items={items} total={total} submitted={submitted} />
            {submitted && <OrderSuccess onAgain={reset} />}
          </aside>
        </div>
        <footer className="inside-footer"><Heart size={13} fill="currentColor" /> CAFE ANGEL · coffee, conversation & little moments · 06.00—22.00</footer>
      </div>
    </section>
  );
}
