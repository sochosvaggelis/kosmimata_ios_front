import { useState, useEffect, useRef } from 'react'
import './Header.css'

export default function Header({ cartCount, onMenuToggle, sidebarOpen }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [headerState, setHeaderState] = useState('full') // 'full' | 'compact' | 'hidden'
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY

      if (currentY < 60) {
        setHeaderState('full')
      } else {
        setHeaderState('compact')
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header header--${headerState}`}>
      <div className="header-main">
        <button
          className={`menu-btn ${sidebarOpen ? 'active' : ''}`}
          onClick={onMenuToggle}
          aria-label="Μενού κατηγοριών"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="header-logo">
          <span className="logo-main">IOS JEWELS</span>
          <span className="logo-sub">Ίος, Κυκλάδες</span>
        </div>

        <div className="header-actions">
          {searchOpen ? (
            <div className="search-bar">
              <input
                autoFocus
                type="text"
                placeholder="Αναζήτηση..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button onClick={() => setSearchOpen(false)} className="search-close">✕</button>
            </div>
          ) : (
            <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Αναζήτηση">
              <SearchIcon />
            </button>
          )}
          <button className="icon-btn" aria-label="Αγαπημένα">
            <HeartIcon />
          </button>
          <button className="icon-btn cart-btn" aria-label="Καλάθι">
            <CartIcon />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#" className="nav-link active">Αρχική</a>
        <a href="#" className="nav-link">Νέες Αφίξεις</a>
        <a href="#" className="nav-link">Collections</a>
        <a href="#" className="nav-link">Bridal</a>
        <a href="#" className="nav-link">Προσφορές</a>
        <a href="#" className="nav-link">Επικοινωνία</a>
      </nav>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
