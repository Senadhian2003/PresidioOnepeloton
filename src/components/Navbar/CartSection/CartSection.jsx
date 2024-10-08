import React, { useMemo } from 'react'
import { removeCartItem } from '../../../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toogleCartPanel } from "../../../store/cartSlice";
import { Link } from 'react-router-dom';
function CartSection() {

  const dispatch = useDispatch()
  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem({ id: id }))
  }

  const cart = useSelector(state => state.cart)

  const totalPrice = useMemo(() => {
    let price = 0;
    let i = 0
    for (i = 0; i < cart.cartItems.length; i++) {
        price += (cart.cartItems[i].quantity * cart.cartItems[i].price)
    }
    return price

}, [cart.cartItems])

  return (
    <div className={`cart-panel ${cart.isCartOpen ? 'open' : ''}`}>


      <div className="d-flex justify-content-end" onClick={() => {
        dispatch(toogleCartPanel())
      }}>

        <svg role="img" width="20" height="20" viewBox="0 0 20 20" data-test-id="flyoutCloseIcon"><title>Close</title><path d="M11.414 10l8.293-8.293A.999.999 0 1 0 18.293.293L10 8.586 1.707.293A.999.999 0 1 0 .293 1.707L8.586 10 .293 18.293a.999.999 0 1 0 1.414 1.414L10 11.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z"></path></svg>
      </div>

      <p className='cart-title'>Your Cart</p>
      <div>

{

  cart.cartItems.length===0 ?   <div > <p className='cart-item-title'>Your cart is empty</p> <Link className="d-flex justify-content-center" style={{ textDecoration: 'none' }} to="/" onClick={() => {
    dispatch(toogleCartPanel())
  }}> <button className='checkout-button' > Shop now </button> </Link>  </div>
  : <div>   {

    cart.cartItems.map((item, index) => {
      return <div style={{ marginTop: "30px" }}>

        <div className="d-flex justify-content-between">

          <p className='cart-item-title'>
            {item.title}
          </p>
          <p className='cart-item-quantity'>Qty : {item.quantity}</p>

        </div>

        <div className="d-flex justify-content-between">

          <p className='cart-item-price'>
            {item.price}
          </p>
          <p className='cart-item-remove' onClick={() => {
            handleRemoveCartItem(item.id)
          }} >Remove</p>

        </div>


      </div>
    })



  }
  Total :{totalPrice}

  <div className="d-flex justify-content-center"> <Link style={{ textDecoration: 'none' }} to="/checkout"> <button className='checkout-button' > Checkout </button> </Link>  </div>
</div>
 

}

      

      </div>









    </div>
  )
}

export default CartSection