import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          cat
            ? `https://opes-clothes.herokuapp.com/api/products?category=${cat}`
            : 'https://opes-clothes.herokuapp.com/api/products'
        );
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  return (
    <div className=" px-4">
      <div className=" grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-5">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
