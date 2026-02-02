import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="container">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Página no encontrada</h1>
          <p className="not-found-text">
            La página que buscás no existe o fue movida.
          </p>
          <Link to="/" className="not-found-btn">
            <i className="bi bi-house"></i>
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
