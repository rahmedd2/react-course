import { CheckOutHeader } from './CheckoutHeader'
import './CheckOut.css'
import { CartItem } from "../../components/CartItem"
import { useState, useEffect } from "react"
import axios from "axios"

export function Checkout({ cart }) {

    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get("/api/payment-summary")
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, []);


    return (
        <>
            <title>Checkout</title>
            <CheckOutHeader cart={cart} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                       {cart.map((cartItem)=>{
                            return(
                            <CartItem 
                                key={cartItem.productId}
                                quantity= {cartItem.quantity} 
                                deliveryOptionId={cartItem.deliveryOptionId}
                                product={cartItem.product}

                            />
                            )
                       })}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                       {paymentSummary && 
                            <>
                            <div className="payment-summary-row">
                                <div>Items ({paymentSummary.totalItems}):</div>
                                <div className="payment-summary-money">${(paymentSummary.productCostCents/100).toFixed(2)}</div>
                            </div>

                            <div className="payment-summary-row">
                                <div>Shipping &amp; handling:</div>
                                <div className="payment-summary-money">${(paymentSummary.shippingCostCents/100).toFixed(2)}</div>
                            </div>

                            <div className="payment-summary-row subtotal-row">
                                <div>Total before tax:</div>
                                <div className="payment-summary-money">${(paymentSummary.totalCostBeforeTaxCents/100).toFixed(2)}</div>
                            </div>

                            <div className="payment-summary-row">
                                <div>Estimated tax (10%):</div>
                                <div className="payment-summary-money">${(paymentSummary.taxCents/100).toFixed(2)}</div>
                            </div>

                            <div className="payment-summary-row total-row">
                                <div>Order total:</div>
                                <div className="payment-summary-money">${(paymentSummary.totalCostCents/100).toFixed(2)}</div>
                            </div>

                            <button className="place-order-button button-primary">
                                  Place your order
                            </button>
                            </>
                       }
                        
                    </div>
                </div>
            </div>
        </>
    )
}