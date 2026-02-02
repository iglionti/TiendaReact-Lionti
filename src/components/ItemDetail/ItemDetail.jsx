import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ id, title, description, price, pictureUrl, category, stock }) {
  const handleAdd = (quantity) => {
    console.log(`Agregados ${quantity} items del producto ${id} al carrito`)
  }

  return (
    <div className="item-detail">
      <div className="item-detail-image-col">
        <div className="item-detail-image-container">
          <img src={pictureUrl} alt={title} className="item-detail-image" />
          <span className="item-detail-category">{category}</span>
        </div>
      </div>
      <div className="item-detail-info-col">
        <h1 className="item-detail-title">{title}</h1>
        <p className="item-detail-price">${price.toLocaleString('es-AR')}</p>
        <p className="item-detail-description">{description}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ItemDetail
