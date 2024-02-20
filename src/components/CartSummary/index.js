// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      const totalPriceList = cartList.map(each => each.quantity * each.price)
      const totalSum = totalPriceList.reduce((a, b) => a + b)

      return (
        <div className="summary-Container">
          <p className="order">
            order Total: <span className="total-price">{totalSum}</span>
          </p>
          <p className="no-of-items">{`${cartListLength} Items in cart`}</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
