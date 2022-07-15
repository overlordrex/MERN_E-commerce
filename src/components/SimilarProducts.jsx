import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import naira from '../assets/naira-sign-solid.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SimilarProducts = ({ cat }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          cat &&
            `https://opes-store.herokuapp.com/api/products?category=${cat[0]}`
        );
        setSimilarProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
  };

  const items = similarProducts.map((product) => (
    <Link key={product._id} to={`/product/${product._id}`}>
      <div className="mr-3 ">
        <img
          src={product.img}
          alt=""
          className=" w-full  h-[200px] lg:h-[400px]  object-cover"
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
      <p className=" font-semibold  capitalize text-[1.2rem]">
        Similar products
      </p>
      <p className="text-[10px] -mt-1 mb-2 lg:text-[12px] uppercase text-gray-500">
        clothes that are similar to {cat}
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

export default SimilarProducts;
