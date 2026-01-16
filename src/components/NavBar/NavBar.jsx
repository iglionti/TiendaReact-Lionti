import CartWidget from '../CartWidget/CartWidget'
import { CATEGORIES } from '../../constants/categories'
import './NavBar.css'

function NavBar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          {/* Logo / Brand */}
          <a className="navbar-brand brand-logo" href="#">
            <span className="logo-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </span>
            <span className="logo-text">HOPPING SA</span>
          </a>

          {/* Botón hamburguesa para móvil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </button>

          {/* Enlaces de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {CATEGORIES.map((cat) => (
                <li key={cat.name} className="nav-item">
                  <a className="nav-link" href="#">
                    <i className={`bi ${cat.icon} me-1`}></i>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Cart Widget */}
            <CartWidget />
          </div>
        </div>
      </nav>
      {/* Diagonal accent stripe */}
      <div className="navbar-accent-stripe"></div>
    </header>
  )
}

export default NavBar
