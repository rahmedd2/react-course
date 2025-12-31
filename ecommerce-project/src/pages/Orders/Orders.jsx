import './Orders.css'
import { Header } from "../../components/Header"
import axios from "axios"
import { useState, useEffect} from "react"
import { OrderContainer } from '../../components/OrderContainer'


export function Orders({ cart, loadCartData }) {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        const getOrderData = async ()=>{
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        getOrderData()
    }, [])

    return (
        <>
            <title>Orders</title>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.length > 0 &&
                        orders.map((order) => {
                            return (
                                <OrderContainer key = {order.id} order={order} loadCartData= {loadCartData} />
                            )
                        })}
                </div>
            </div>
        </>
    )
}