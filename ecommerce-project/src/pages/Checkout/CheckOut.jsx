import { CheckOutHeader } from './CheckoutHeader'
import './CheckOut.css'
import { useState, useEffect } from "react"
import axios from "axios"
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

export function Checkout({ cart, loadCartData }) {

    return (
        <>
            <title>Checkout</title>
            <CheckOutHeader cart={cart} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary  cart={cart} loadCartData= {loadCartData}  />
                    <PaymentSummary cart={cart} />
                </div>
            </div>
        </>
    )
}