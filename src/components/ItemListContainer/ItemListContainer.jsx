import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="container">
        <div className="welcome-section">
          <h1 className="welcome-title">{greeting}</h1>
          <p className="welcome-subtitle">
            Descubrí los mejores artículos deportivos para alcanzar tus metas
          </p>
          <div className="welcome-icons">
            <i className="bi bi-trophy-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-lightning-fill"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
