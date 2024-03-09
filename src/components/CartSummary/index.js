// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      const totalPriceList = cartList.map(each => each.price * each.quantity)

      const totalSum = totalPriceList.reduce((a, b) => a + b)
      return (
        <div className="summary-Container">
          <h1 className="order">
            Order Total:{' '}
            <span className="total-price">{`Rs ${totalSum}/-`}</span>
          </h1>
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
