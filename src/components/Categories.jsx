import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { categories } from '../data';

const Categories = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  };

  const items = categories.map((category) => (
    <Link to={`/products/${category.cat}`}>
      <div className="lg:m-4  rounded-lg h-[300px] relative" key={category.id}>
        <img
          src={category.img}
          alt=""
          className=" w-full h-full object-cover rounded-sm "
        />
        <div className=" absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>

        <div className="absolute left-2 -bottom-[250px] w-full z-20  h-full">
          <div className=" text-white flex items-center uppercase text-[20px] font-bold">
            <div className=" mr-2">{category.icon}</div>
            {category.cat}
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className=" p-4 ">
      <p className=" font-semibold  capitalize text-[1.3rem]">categories</p>
      <p className="text-[10px] -mt-1 mb-2 lg:text-[12px] uppercase text-gray-500">
        filter clothes base on there categories
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

export default Categories;
