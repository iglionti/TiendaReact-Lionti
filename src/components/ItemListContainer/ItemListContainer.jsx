import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories'
import { getProducts, getProductsByCategory } from '../../services/productService'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()

    fetchProducts
      .then(data => {
        setProducts(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  const currentCategory = categoryId
    ? CATEGORIES.find(cat => cat.id === categoryId)
    : null

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Speed lines background */}
        <div className="speed-lines"></div>

        {/* Diagonal split overlay */}
        <div className="diagonal-split"></div>

        <div className="container hero-content">
          <div className="row align-items-center min-vh-hero">
            {/* Left side - Text content */}
            <div className="col-lg-6 hero-text-col">
              <div className="hero-text">
                <span className="hero-tagline">Equipamiento deportivo premium</span>
                <h1 className="hero-title">
                  <span className="title-line">ALCANZÁ</span>
                  <span className="title-line">TUS METAS</span>
                  <span className="title-line title-accent">DEPORTIVAS</span>
                </h1>
                <p className="hero-subtitle">{greeting}</p>
                <a href="#productos" className="cta-button">
                  <span>VER PRODUCTOS</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Right side - Category cards */}
            <div className="col-lg-6 hero-cards-col">
              <div className="category-grid">
                {CATEGORIES.map((cat, index) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className={`category-card ${categoryId === cat.id ? 'active' : ''}`}
                    style={{ '--delay': `${index * 0.1}s`, '--accent-color': cat.color }}
                  >
                    <div className="card-icon">
                      <i className={`bi ${cat.icon}`}></i>
                    </div>
                    <span className="card-name">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="products-section">
        <div className="container">
          <div className="products-header">
            <h2 className="products-title">
              {currentCategory ? currentCategory.name : 'Todos los productos'}
            </h2>
            {categoryId && (
              <Link to="/" className="view-all-link">
                <span>Ver todos</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            )}
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Cargando productos...</p>
            </div>
          ) : products.length > 0 ? (
            <ItemList products={products} />
          ) : (
            <div className="empty-container">
              <i className="bi bi-inbox"></i>
              <p>No hay productos en esta categoría</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default ItemListContainer
