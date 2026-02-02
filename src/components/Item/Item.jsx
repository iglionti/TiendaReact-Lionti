import { Link } from 'react-router-dom'
import './Item.css'

function Item({ id, title, price, pictureUrl }) {
  return (
    <article className="item-card">
      <div className="item-image-container">
        <img src={pictureUrl} alt={title} className="item-image" />
        <div className="item-overlay">
          <Link to={`/item/${id}`} className="item-view-btn">
            <i className="bi bi-eye"></i>
            <span>Ver detalle</span>
          </Link>
        </div>
      </div>
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price.toLocaleString('es-AR')}</p>
      </div>
    </article>
  )
}

export default Item
