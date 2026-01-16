import './CartWidget.css'

function CartWidget() {
  return (
    <div className="cart-widget">
      <div className="cart-icon-wrapper">
        <i className="bi bi-cart3 cart-icon"></i>
        <span className="cart-badge">0</span>
      </div>
    </div>
  )
}

export default CartWidget
