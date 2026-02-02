import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAdd = () => {
    onAdd(count)
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button
          className="count-btn"
          onClick={decrement}
          disabled={count <= 1}
        >
          <i className="bi bi-dash"></i>
        </button>
        <span className="count-value">{count}</span>
        <button
          className="count-btn"
          onClick={increment}
          disabled={count >= stock}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        <i className="bi bi-cart-plus"></i>
        <span>Agregar al carrito</span>
      </button>
      <p className="stock-info">
        <i className="bi bi-box-seam"></i>
        <span>{stock} disponibles</span>
      </p>
    </div>
  )
}

export default ItemCount
