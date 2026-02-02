import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { CATEGORIES } from '../../constants/categories'
import './NavBar.css'

function NavBar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          {/* Logo / Brand */}
          <Link className="navbar-brand brand-logo" to="/">
            <span className="logo-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </span>
            <span className="logo-text">HOPPING SA</span>
          </Link>

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
                <li key={cat.id} className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to={`/category/${cat.id}`}
                  >
                    <i className={`bi ${cat.icon} me-1`}></i>
                    <span>{cat.name}</span>
                  </NavLink>
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
