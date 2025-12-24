import "./HomePage.css"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react"
import { Product } from "../../components/Product.jsx"
import axios from "axios"

export function HomePage() {
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
    axios.get("http://localhost:3000/api/products") //response that is sent back gives us the data we want using axios
    .then((response)=>{
       setProducts(response.data);
    })
  },[]);

  return (
    <>
      <title>Home</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                image={product.image}
                name={product.name}
                rating={product.rating}
                priceCents={product.priceCents}
                keywords={product.keywords}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}