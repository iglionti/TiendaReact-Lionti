import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const categories = [
    { icon: 'bi-dribbble', name: 'Fútbol', color: '#00E676' },
    { icon: 'bi-person-walking', name: 'Running', color: '#00C853' },
    { icon: 'bi-heart-pulse', name: 'Fitness', color: '#00A844' },
    { icon: 'bi-water', name: 'Natación', color: '#00E676' },
    { icon: 'bi-bicycle', name: 'Ciclismo', color: '#00C853' },
  ]

  return (
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
              {categories.map((cat, index) => (
                <div
                  key={cat.name}
                  className="category-card"
                  style={{ '--delay': `${index * 0.1}s`, '--accent-color': cat.color }}
                >
                  <div className="card-icon">
                    <i className={`bi ${cat.icon}`}></i>
                  </div>
                  <span className="card-name">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemListContainer
