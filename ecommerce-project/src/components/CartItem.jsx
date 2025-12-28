import { useState, useEffect } from "react"
import axios from "axios"
import dayjs from "dayjs"

export function CartItem({ product, quantity, deliveryOptionId}) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {
        axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
            .then((response) => {
                setDeliveryOptions(response.data);
            })
    }, []);

    

    const itemDeliveryOption =deliveryOptions.find((deliveryOption)=>{
        return deliveryOption.id === deliveryOptionId;
    })
    return (
        <>
            <div className="cart-item-container">
                <div className="delivery-date">
                    Delivery date: {deliveryOptions.length > 0 && dayjs(itemDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>

                <div className="cart-item-details-grid">
                    <img className="product-image"
                        src={product.image} />

                    <div className="cart-item-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            ${(product.priceCents / 100).toFixed(2)}
                        </div>
                        <div className="product-quantity">
                            <span>
                                Quantity: <span className="quantity-label">{quantity}</span>
                            </span>
                            <span className="update-quantity-link link-primary">
                                Update
                            </span>
                            <span className="delete-quantity-link link-primary">
                                Delete
                            </span>
                        </div>
                    </div>

                    <div className="delivery-options">
                        <div className="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        {deliveryOptions.map((deliveryOption) => {
                            let price = (deliveryOption.priceCents/100).toFixed(2);
                            let priceString = `$${price} - Shipping`;
                            return (
                                <div key = {deliveryOption.id} className="delivery-option">
                                    <input type="radio" checked={deliveryOption.id === deliveryOptionId}
                                        className="delivery-option-input"
                                        name={`delivery-option-${product.id}`} />
                                    <div>
                                        <div className="delivery-option-date">
                                            {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                        </div>
                                        <div className="delivery-option-price">
                                            {deliveryOption.priceCents===0 ? "FREE Shipping" : priceString }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}