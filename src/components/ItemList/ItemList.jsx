import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ products }) {
  return (
    <div className="item-list-grid">
      {products.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ItemList
