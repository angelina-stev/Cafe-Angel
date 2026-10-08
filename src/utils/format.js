export function rupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
}

export function nomorAntrean() {
  return `A-${String(Math.floor(Math.random() * 900) + 100)}`;
}

export function waktuSekarang() {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}