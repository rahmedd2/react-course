import "./HomePage.css"
import { Header } from "../../components/Header"
import { ProductGrid } from "../../components/ProductGrid.jsx"
import axios from "axios"
import {useState, useEffect} from "react"

export function HomePage({ cart, loadCartData}) {
  // one way to fetch data from backend 
  // fetch(  //sends a request to the backend with the specified url 
  //   "http://localhost:3000/api/products"
  // )
  //   .then((response)=>{ //use then to wait for the response
  //     return response.json() //gives us the actual data 
  //   }).then((data)=>{
  //       console.log(data) // print the data in the console
  //   });

  const [products, setProducts] = useState([]);
    //using axios to fetch data
    useEffect(()=>{
      const getProductData = async () => {
        const response = await axios.get("/api/products") //response that is sent back gives us the data we want using axios
        setProducts(response.data);
      }
      getProductData();
    },[]);

  return (
    <>
      <title>Home</title>
      <Header cart={cart} />

      <div className="home-page">
          <ProductGrid products= {products} loadCartData={loadCartData} />
        </div>
    </>
  )
}