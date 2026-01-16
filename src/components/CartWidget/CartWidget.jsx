import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart3 cart-icon"></i>
      <span className="cart-badge">0</span>
    </div>
  )
}

export default CartWidget
