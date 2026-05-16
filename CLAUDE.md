# KosmimataIos — Claude Code Instructions

## Project

React e-commerce app for **IOS Jewels**, a handmade jewelry store from Ios, Cyclades.
Vite + React 18, no TypeScript, no backend.

## File Map

```
src/
  App.jsx              — root component, state management, layout
  App.css              — grid, footer, products-header, responsive
  index.css            — CSS variables, global reset, fonts
  data/products.js     — products[] and categories[] arrays
  components/
    Header.jsx / .css  — logo, nav, search, cart, compact mode
    Sidebar.jsx / .css — category filter drawer
    ProductCard.jsx / .css
    LocationStrip.jsx / .css
    WaveDivider.jsx / .css
```

## Design System

**Colors (index.css CSS variables — use these, never hardcode hex):**
- Backgrounds: `--white`, `--off-white` (#f7f9fc)
- Blue palette: `--blue-50` → `--blue-600` (light blue only)
- Text: `--text-dark`, `--text-mid`, `--text-light`
- Border: `--border` (#e2ecf5)
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`

**Typography:**
- Headings: `Cormorant Garamond` serif
- Body/UI: `Inter` sans-serif

**Rules:**
- No navy, no dark blue backgrounds
- No emojis anywhere (UI, code, comments)
- No hero banner
- Minimalist layout — no decorative clutter
- All UI text in Greek

## Code Style

- Functional components only, hooks
- CSS in separate `.css` files per component, class-based (no inline styles, no CSS-in-JS)
- No TypeScript
- No comments unless the WHY is non-obvious
- Don't add error handling for scenarios that can't happen
- Don't add features beyond what's asked

## State (App.jsx)

- `selectedCategory` — active category filter (null = all)
- `sort` — 'default' | 'price-asc' | 'price-desc' | 'name'
- `cartItems` — array of product objects
- `viewMode` — 'grid' | 'list'
- `headerCompact` — driven by IntersectionObserver sentinel at page top
- `sidebarOpen` — sidebar drawer toggle

## Adding Products

Edit `src/data/products.js`. Each product: `{ id, category, name, description, price, badge, image }`.
Categories: `rings`, `necklaces`, `bracelets`, `earrings`, `sets`, `anklets`.
