import { useState } from 'react'
import './ProductCard.css'

export default function ProductCard({ product, onAddToCart }) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <article className="product-card">
      <div className="card-image-wrap">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="card-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="card-image-placeholder" />
        )}

        {product.badge && (
          <span className={`card-badge badge-${badgeType(product.badge)}`}>
            {product.badge}
          </span>
        )}

        <button
          className={`card-like ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(l => !l)}
          aria-label={liked ? 'Αφαίρεση από αγαπημένα' : 'Προσθήκη στα αγαπημένα'}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>

      <div className="card-body">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-description">{product.description}</p>

        <div className="card-footer">
          <span className="card-price">{product.price.toLocaleString('el-GR')} €</span>
        </div>
      </div>

      <button
        className={`add-btn ${added ? 'added' : ''}`}
        onClick={handleAddToCart}
      >
        {added ? 'Προστέθηκε' : 'Προσθήκη στο καλάθι'}
      </button>
    </article>
  )
}

function badgeType(badge) {
  if (['Νέο'].includes(badge)) return 'new'
  if (['Bestseller'].includes(badge)) return 'best'
  if (['Premium', 'Exclusive'].includes(badge)) return 'premium'
  if (['Summer'].includes(badge)) return 'summer'
  return 'default'
}

function HeartIcon({ filled }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
