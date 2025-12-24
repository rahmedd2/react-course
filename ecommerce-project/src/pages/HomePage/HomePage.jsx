import "./HomePage.css"
import { Header } from "../../components/Header"
import { products } from "../../data/products.js"
import { Product } from "../../components/Product.jsx"

export function HomePage() {
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