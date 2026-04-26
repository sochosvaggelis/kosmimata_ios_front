import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Καλοκαίρι 2025 Collection ✦</p>
        <h1 className="hero-title">
          Κοσμήματα<br />
          <em>εμπνευσμένα από την Ίο</em>
        </h1>
        <p className="hero-subtitle">
          Χειροποίητα κοσμήματα από χρυσό, ασήμι και πολύτιμες πέτρες —<br />
          δημιουργημένα στο καλντέρι της Ίου, για γυναίκες που αγαπούν τη θάλασσα.
        </p>
        <div className="hero-actions">
          <button className="hero-btn primary">Ανακαλύψτε τη Collection</button>
          <button className="hero-btn secondary">Η Ιστορία μας</button>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="deco-circle c1" />
        <div className="deco-circle c2" />
        <div className="deco-circle c3" />
        <div className="deco-text">IOS<br />JEWELS</div>
      </div>
    </div>
  )
}
