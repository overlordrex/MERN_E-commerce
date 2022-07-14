import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PopularProducts from '../components/PopularProducts';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className=" w-full">
      <Navbar />
      <br />
      <br />
      <PopularProducts />
      <Categories />
      <div className=" pl-4 font-semibold mb-2 capitalize text-[1.3rem]">
        all Products
      </div>

      <Products />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
