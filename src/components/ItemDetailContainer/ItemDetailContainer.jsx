import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/productService'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(data => {
        setProduct(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <section className="item-detail-section">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Cargando producto...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="item-detail-section">
        <div className="container">
          <div className="not-found-container">
            <i className="bi bi-emoji-frown"></i>
            <h2>Producto no encontrado</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="item-detail-section">
      <div className="container">
        <ItemDetail {...product} />
      </div>
    </section>
  )
}

export default ItemDetailContainer
