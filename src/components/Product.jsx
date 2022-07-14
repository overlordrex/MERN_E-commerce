import React from 'react';
import naira from '../assets/naira-sign-solid.svg';

const Product = ({ product }) => {
  return (
    <div>
      <img
        className=" w-full h-[150px]  lg:h-[400px] object-cover"
        src={product.img}
        alt=""
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
  );
};

export default Product;
