import { CartItem } from "../../components/CartItem"

export function OrderSummary( { cart, loadCartData}){

    return (
        <div className="order-summary">
                               {cart.map((cartItem)=>{
                                    return(
                                    <CartItem 
                                        key={cartItem.productId}
                                        quantity= {cartItem.quantity} 
                                        deliveryOptionId={cartItem.deliveryOptionId}
                                        product={cartItem.product}
                                        loadCartData= {loadCartData}
        
                                    />
                                    )
                               })}
         </div>
    )
}