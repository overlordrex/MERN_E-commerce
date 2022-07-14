import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PopularProducts from '../components/PopularProducts';
import Products from '../components/Products';

const ProductList = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Navbar />
      <div className=" capitalize font-bold text-[24px] px-4">{category}</div>
      <br />
      <Products cat={category} />
      <br />
      <br />
      <PopularProducts />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ProductList;
