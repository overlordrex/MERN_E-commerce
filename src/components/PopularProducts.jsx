import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
// import { popularProducts } from '../data';
import naira from '../assets/naira-sign-solid.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          'https://opes-store.herokuapp.com/api/products'
        );
        setPopularProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const responsive = {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
  };

  const items = popularProducts.slice(22, 41).map((product) => (
    <Link key={product._id} to={`/product/${product._id}`}>
      <div className="mr-3 ">
        <img
          src={product.img}
          alt=""
          className=" w-full  h-[200px] lg:h-[400px] object-cover"
        />

        <div className=" mt-2">
          <div className=" text-[10px] lg:text-[12px]">{product.title}</div>
          <div className=" flex items-center ">
            <img
              className=" w-[10px] h-[10px] md:w-[13px] md:h-[13px]"
              src={naira}
              alt=""
            />
            <span className=" text-[12px] lg:text-base ml-1">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className=" px-4 py-2 ">
      <p className="text-[10px] lg:text-[12px] uppercase text-gray-400">
        currently trending clothes
      </p>
      <p className=" font-semibold -mt-2 mb-2  capitalize text-[1.2rem]">
        Popular products
      </p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default PopularProducts;
