import { useState, useEffect, useRef} from "react"
import axios from "axios"
import dayjs from "dayjs"

export function CartItem({ product, quantity, deliveryOptionId, loadCartData}) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [itemQuantity, setItemQuantity] = useState('');

    useEffect(() => {
        const getDeliveryData = async ()=>{
         const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
         setDeliveryOptions(response.data);

        }
        getDeliveryData();
    }, []);

    const inputContainer = useRef();

    const deleteCartItem = async ()=> {
        await axios.delete(`/api/cart-items/${product.id}`)
        await loadCartData()
    }

    const updateItemQuantity = async ()=>{
        await axios.put(`/api/cart-items/${product.id}`, {
            productId: product.id,
            quantity: Number(itemQuantity),
        })
         await loadCartData()
           setUpdated(false);
           setItemQuantity('');

    }
    
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
                            {updated ? (
                            < span className="update-quantity-textbox" >
                                <input type="text" 
                                       value ={itemQuantity} 
                                       ref={inputContainer} 
                                       onChange = {(e)=>{
                                         setItemQuantity(e.target.value);
                                       }}
                                       onKeyDown={ async (e)=>{
                                         if(e.key === 'Enter'){
                                            await updateItemQuantity();
                                         }
                                         if(e.key === 'Escape'){
                                            setUpdated(false);
                                            setItemQuantity('');
                                         }
                                       }}
                                />
                            </span>
                            ) : (
                            <span>
                                Quantity: <span className="quantity-label">{quantity}</span>
                            </span>
                            )
                            }
                            <span className="update-quantity-link link-primary" onClick={()=>{
                                setUpdated(!updated);
                            }} >
                                Update
                            </span>
                            <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
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

                             const updateDeliveryOption = async ()=>{
                                await axios.put(`/api/cart-items/${product.id}`, {
                                    deliveryOptionId: deliveryOption.id
                                })
                                await loadCartData();
                            }

                            return (
                                <div key = {deliveryOption.id} className="delivery-option" onClick={updateDeliveryOption}>
                                    <input type="radio" checked={deliveryOption.id === deliveryOptionId}
                                        onChange = {()=> {}}
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