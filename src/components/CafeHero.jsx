import { Coffee, Sparkles } from "lucide-react";


export default function CafeHero() {
  return (
    <section className="cafe-hero">
      <div>
        <span className="hero-label"><Sparkles size={14} /> SIGNATURE MENU</span>
        <h2>Slow down,<br /><em>sip something beautiful.</em></h2>
        <p>Crafted coffee, intimate moments, and little luxuries.</p>
      </div>
      <div className="hero-cup">
        <div className="steam steam--1" />
        <div className="steam steam--2" />
        <div className="cup"><Coffee size={40} /></div>
      </div>
    </section>
  );
}
