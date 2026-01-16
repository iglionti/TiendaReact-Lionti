import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-dribbble me-1"></i>
                  <span>Fútbol</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person-walking me-1"></i>
                  <span>Running</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-heart-pulse me-1"></i>
                  <span>Fitness</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-water me-1"></i>
                  <span>Natación</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bicycle me-1"></i>
                  <span>Ciclismo</span>
                </a>
              </li>
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
