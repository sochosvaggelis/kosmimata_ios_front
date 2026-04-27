import './LocationStrip.css'

export default function LocationStrip() {
  return (
    <div className="location-strip">
      <div className="location-strip-inner">
        <span className="location-item">
          <PinIcon />
          Χώρα Ίου, Κυκλάδες
        </span>
        <span className="location-dot" />
        <span className="location-item">Χειροποίητα κοσμήματα</span>
        <span className="location-dot" />
        <span className="location-item">
          <WaveIcon />
          Αιγαίο Πέλαγος
        </span>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WaveIcon() {
  return (
    <svg width="20" height="10" viewBox="0 0 40 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 7 Q7 2 12 7 Q17 12 22 7 Q27 2 32 7 Q37 12 42 7" />
    </svg>
  )
}
