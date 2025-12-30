
import { ProductContainer } from "./ProductContainer";

export function ProductGrid({ products, loadCartData }) {

  

    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <ProductContainer key = {product.id} product={product} loadCartData={loadCartData} />
                );
            })}
        </div>
    )
}