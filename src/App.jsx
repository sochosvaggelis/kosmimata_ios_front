import { useState, useMemo } from 'react'
import Header from './components/Header'
import LocationStrip from './components/LocationStrip'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import WaveDivider from './components/WaveDivider'
import { products, categories } from './data/products'
import './App.css'

const SORT_OPTIONS = [
  { value: 'default', label: 'Προεπιλογή' },
  { value: 'price-asc', label: 'Τιμή: Χαμηλή → Υψηλή' },
  { value: 'price-desc', label: 'Τιμή: Υψηλή → Χαμηλή' },
  { value: 'name', label: 'Αλφαβητικά' },
]

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sort, setSort] = useState('default')
  const [cartItems, setCartItems] = useState([])
  const [viewMode, setViewMode] = useState('grid')

  const categoryLabel = selectedCategory
    ? categories.find(c => c.id === selectedCategory)?.label
    : 'Όλα τα Κοσμήματα'

  const filtered = useMemo(() => {
    let list = selectedCategory
      ? products.filter(p => p.category === selectedCategory)
      : products

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    else if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'el'))

    return list
  }, [selectedCategory, sort])

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  const handleSelectCategory = (id) => {
    setSelectedCategory(id)
  }

  return (
    <div className="app">
      <Header
        cartCount={cartItems.length}
        onMenuToggle={() => setSidebarOpen(o => !o)}
        sidebarOpen={sidebarOpen}
      />

      <LocationStrip />

      <div className="layout">
        <Sidebar
          isOpen={sidebarOpen}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onToggle={() => setSidebarOpen(o => !o)}
        />

        <main className="main">
          <div className="products-header">
            <div className="products-header-left">
              <h2 className="products-title">{categoryLabel}</h2>
              <span className="products-count">{filtered.length} προϊόντα</span>
            </div>
            <div className="products-header-right">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="sort-select"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <div className="view-toggle">
                <button
                  className={viewMode === 'grid' ? 'active' : ''}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <GridIcon />
                </button>
                <button
                  className={viewMode === 'list' ? 'active' : ''}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>Δεν βρέθηκαν προϊόντα σε αυτή την κατηγορία.</p>
            </div>
          )}
        </main>
      </div>

      <WaveDivider />

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">IOS JEWELS</div>
            <p>Χειροποίητα κοσμήματα εμπνευσμένα από την ομορφιά της Ίου, Κυκλάδες.</p>
          </div>
          <div className="footer-links">
            <p className="footer-heading">Πληροφορίες</p>
            <a href="#">Για εμάς</a>
            <a href="#">Επικοινωνία</a>
            <a href="#">Πολιτική επιστροφών</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-links">
            <p className="footer-heading">Κατηγορίες</p>
            {categories.slice(0, 4).map(c => (
              <a key={c.id} href="#">{c.label}</a>
            ))}
          </div>
          <div className="footer-links">
            <p className="footer-heading">Επικοινωνία</p>
            <span>Χώρα Ίου, Κυκλάδες</span>
            <span>+30 22860 00000</span>
            <span>info@iosjewels.gr</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 IOS Jewels · Όλα τα δικαιώματα διατηρούνται</p>
        </div>
      </footer>
    </div>
  )
}

function GridIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
