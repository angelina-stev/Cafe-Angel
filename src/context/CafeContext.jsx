import { createContext, useContext, useState } from "react";

const CafeContext = createContext(null);

export function CafeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const toggleOpen = () => {
    if (isDoorOpen) return;
    setIsOpen((value) => !value);
  };

  const openDoor = () => {
    if (!isOpen) {
      window.alert("Cafe sedang tutup. Klik papan status dulu untuk membukanya.");
      return;
    }
    setIsDoorOpen(true);
  };

  const closeDoor = () => setIsDoorOpen(false);

  return (
    <CafeContext.Provider value={{ isOpen, toggleOpen, isDoorOpen, openDoor, closeDoor }}>
      {children}
    </CafeContext.Provider>
  );
}

export function useCafe() {
  return useContext(CafeContext);
}