import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import ProductCard from "./ProductCard";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius soluta illum beatae, ut itaque <br /> harum asperiores recusandae minima neque?
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 border border-red-600">
                {
                    products.slice(0, 6).map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;