import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../redux/cartRedux';
import ShippingForm from '../components/ShippingForm';
import naira from '../assets/naira-sign-solid.svg';
import { IoCloseSharp } from 'react-icons/io5';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();
  const [pay, setPay] = useState(false);

  return (
    <div className=" relative">
      {pay && (
        <ShippingForm
          product={products}
          quantity={quantity}
          price={total}
          pay={pay}
          setPay={setPay}
        />
      )}
      <div className="  h-[60px] p-4 flex gap-4  items-center">
        <Link to={'/'}>
          <IoArrowBack fontSize={25} />
        </Link>
        <div className=" text-[30px]">Cart</div>
      </div>
      <div className="flex flex-col  lg:flex-row  p-4">
        <div className=" w-full">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className=" w-full  flex justify-between mb-4 "
              >
                <div className=" flex">
                  <img
                    src={product.img}
                    alt=""
                    className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] object-contain"
                  />

                  <div className=" ml-2 lg:ml-5 ">
                    <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
                      product:
                      <span className=" font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                        {product.title}
                      </span>
                    </div>

                    <div className=" font-bold mb-[1px] lg:mb-1 capitalizetext-[0.85rem] lg:text-[1rem]">
                      color:
                      <span className=" font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                        {product.color}
                      </span>
                    </div>
                    <div className=" font-bold  mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
                      size:
                      <span className=" font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                        {product.size}
                      </span>
                    </div>
                    <div className=" font-bold  capitalize text-[0.85rem] lg:text-[1rem]">
                      quantity:
                      <span className=" font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                        {product.quantity}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className=" mr-3"
                  onClick={() => dispatch(removeProduct(product))}
                >
                  <IoCloseSharp fontSize={25} />
                </div>
              </div>
            ))
          ) : (
            <p className=" font-semibold my-2 capitalize text-[1.3rem]">
              Cart is empty
            </p>
          )}
        </div>
        <div className=" lg:w-[600px] lg:h-[200px] mt-5 lg:mt-0  border border-gray-300 rounded-md">
          <div className="text-[20px] lg:text-[30px] text-center">
            ORDER SUMMARY
          </div>
          <div className=" p-4">
            {/* <div className=" flex items-center mb-2 justify-between">
              <div className=" font-bold  capitalize text-[0.85rem] lg:text-[1rem]">
                Estimated shipping:
              </div>
              <span className=" text-end font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                $ 120.56
              </span>
            </div>
            <div className=" flex items-center mb-2 justify-between">
              <div className=" font-bold  capitalize text-[0.85rem] lg:text-[1rem]">
                shipping discount:
              </div>
              <span className=" text-end font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                $ 20.56
              </span>
            </div> */}

            <div className=" flex items-center mb-4 justify-between">
              <div className=" font-bold  capitalize text-[1.2rem] lg:text-[1.5rem]">
                Total:
              </div>
              <span className=" flex items-center  ml-2  ">
                <img
                  className=" mr-2 w-[10px] h-[10px] md:w-[13px] md:h-[13px]"
                  src={naira}
                  alt=""
                />
                <div className="text-end font-normal capitalize text-[0.85rem] lg:text-[1rem]">
                  {total}
                </div>
              </span>
            </div>
            <button
              onClick={() => setPay(!pay)}
              className="outline-none  w-full bg-black text-white p-2 uppercase"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
