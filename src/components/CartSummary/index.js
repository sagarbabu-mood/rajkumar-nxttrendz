// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      const totalPriceList = cartList.map(each =>
        console.log(each.price * each.quantity),
      )

      const totalSum = totalPriceList.reduce((a, b) => a + b)
      console.log(totalSum)
      return (
        <div className="summary-Container">
          <p className="order">
            Order Total:{' '}
            <span className="total-price">{`Rs ${totalSum}/-`}</span>
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
