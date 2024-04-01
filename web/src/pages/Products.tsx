import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${backendURL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="grid md:grid-cols-4 gap-8  grid-cols-1">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            description={product.description}
            quantity={product.quantity}
            id={product.id}
            name={product.name}
            photo={product.photo}
            price={product.price}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Products;
