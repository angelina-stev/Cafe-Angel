import { CafeProvider, useCafe } from "./context/CafeContext";
import CafeExterior from "./pages/CafeExterior";
import CafeInterior from "./pages/CafeInterior";
import "./index.css";

function CafeScene() {
  const { isDoorOpen } = useCafe();

  return (
    <div className={`scene ${isDoorOpen ? "scene--inside" : "scene--outside"}`}>
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <div className="phone-frame">
        <CafeExterior />
        <CafeInterior />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CafeProvider>
      <CafeScene />
    </CafeProvider>
  );
}