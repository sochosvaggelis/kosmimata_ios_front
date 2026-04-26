import { useState } from 'react'
import { categories } from '../data/products'
import './Sidebar.css'

export default function Sidebar({ isOpen, selectedCategory, onSelectCategory, onToggle }) {
  const [expanded, setExpanded] = useState({})
  const [priceMax, setPriceMax] = useState(3000)

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => onSelectCategory(selectedCategory)}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button
            className="sidebar-tab-btn"
            onClick={onToggle}
            aria-label={isOpen ? 'Κλείσιμο φίλτρων' : 'Άνοιγμα φίλτρων'}
          >
            <PanelChevron isOpen={isOpen} />
          </button>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-section">
            <p className="sidebar-label">Κατηγορίες</p>

            <button
              className={`category-all ${!selectedCategory ? 'active' : ''}`}
              onClick={() => onSelectCategory(null)}
            >
              Όλα τα Κοσμήματα
            </button>

            {categories.map(cat => (
              <div key={cat.id} className="category-group">
                <div className="category-row">
                  <button
                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => onSelectCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                  <button
                    className={`expand-btn ${expanded[cat.id] ? 'open' : ''}`}
                    onClick={() => toggleExpand(cat.id)}
                    aria-label="Επέκταση"
                  >
                    <ChevronIcon />
                  </button>
                </div>

                {expanded[cat.id] && (
                  <div className="subcategories">
                    {cat.subcategories.map(sub => (
                      <button key={sub} className="subcat-btn">
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <p className="sidebar-label">Εύρος Τιμής</p>
            <div className="price-display">
              <span>0 €</span>
              <span>{priceMax.toLocaleString('el-GR')} €</span>
            </div>
            <input
              type="range"
              min={0}
              max={3000}
              step={50}
              value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
              className="price-slider"
            />
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <p className="sidebar-label">Υλικό</p>
            <div className="filter-checks">
              {['Χρυσό 18Κ', 'Χρυσό 14Κ', 'Λευκόχρυσος', 'Ασήμι 925', 'Ροζ Χρυσό'].map(m => (
                <label key={m} className="check-label">
                  <input type="checkbox" />
                  <span>{m}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <p className="sidebar-label">Πέτρα</p>
            <div className="filter-checks">
              {['Διαμάντι', 'Ζαφείρι', 'Ρουμπίνι', 'Σμαράγδι', 'Τοπάζ', 'Ζιργκόν'].map(s => (
                <label key={s} className="check-label">
                  <input type="checkbox" />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

function PanelChevron({ isOpen }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      {isOpen
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />
      }
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
