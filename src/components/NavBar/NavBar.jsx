import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand brand-logo" href="#">
          <i className="bi bi-lightning-charge-fill me-2"></i>
          Hopping SA
        </a>

        {/* Botón hamburguesa para móvil */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-dribbble me-1"></i>
                Fútbol
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-walking me-1"></i>
                Running
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-heart-pulse me-1"></i>
                Fitness
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-water me-1"></i>
                Natación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-bicycle me-1"></i>
                Ciclismo
              </a>
            </li>
          </ul>

          {/* Cart Widget */}
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
