import {useState, useEffect} from "react"
import { useNavigate } from "react-router";
import axios from "axios"

export function PaymentSummary({ cart, loadCartData }){

      const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const getPaymentSummaryData = async ()=>{
            const response = await  axios.get("/api/payment-summary")
            setPaymentSummary(response.data);
        }
        getPaymentSummaryData();
    }, [cart]);

    const navigate = useNavigate();

    const createOrder = async ()=>{
        await axios.post('/api/orders');
        await loadCartData()
        navigate('/orders');
    }
    return (
        
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

                            <button className="place-order-button button-primary"
                             onClick={createOrder}>
                                  Place your order
                            </button>
                            </>
                       }
                        
                    </div>
                    
    )
}