import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PopularProducts from '../components/PopularProducts';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addProduct, removeProduct } from '../redux/cartRedux';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import naira from '../assets/naira-sign-solid.svg';
import SimilarProducts from '../components/SimilarProducts';
import ShippingForm from '../components/ShippingForm';

const Product = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [add, setAdd] = useState(false);
  const [pay, setPay] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    setAdd(false);
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://opes-clothes.herokuapp.com/api/products/find/${id}`
        );
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...product, color, size, quantity }));
    setAdd(!add);
    toast.dark('Added to cart');
  };

  const remove = () => {
    dispatch(removeProduct(product));
    setAdd(!add);
    toast.dark('Removed ');
  };

  const buy = () => {
    if (user) {
      setPay(!pay);
    } else {
      navigate('/register');
    }
  };

  return (
    <div className=" relative">
      <Navbar />
      <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row p-4 lg:p-4 my-6">
        <img
          src={product.img}
          alt=""
          className="  w-[300px] h-[200px] lg:w-[500px] lg:h-[500px]  object-contain"
        />
        <div className=" lg:ml-5">
          <div className=" my-2 text-center text-[25px] lg:text-[30px] font-extralight">
            {product.title}
          </div>
          <div className="text-center] lg:w-[600px] text-sm lg:text-base">
            {product.desc}
          </div>
          <div className="my-2 flex items-center mt-2 ">
            <img src={naira} alt="" width={13} height={13} />
            <span className="   ml-1  text-[20px]  lg:text-[30px] font-extralight">
              {product.price}
            </span>
          </div>

          <div className="flex flex-col  lg:flex-row gap-3">
            <select
              onChange={(e) => setColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={null}>Color</option>
              {product.color?.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setSize(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={null}>Size</option>
              {product.size?.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex items-center gap-5">
            <AiOutlinePlus
              onClick={() => handleQuantity('inc')}
              fontSize={25}
            />
            <div className="bg-gray-50  w-[50px] h-[50px]  focus:ring-blue-500 focus:border-blue-500 border flex items-center justify-center text-center my-3 border-gray-300 rounded-md">
              {quantity}
            </div>

            <AiOutlineMinus
              onClick={() => handleQuantity('dec')}
              fontSize={25}
            />
          </div>
          <div className=" mt-4 flex gap-3">
            {add ? (
              <button
                onClick={remove}
                className=" outline-none w-[120px] md:w-[120px]    lg:w-[150px] bg-black text-white p-2 "
              >
                Remove
              </button>
            ) : (
              <button
                onClick={addToCart}
                className=" outline-none w-[120px] md:w-[120px] rounded-lg  border-2 border-black   lg:w-[150px] bg-black text-white p-2 "
              >
                Add to cart
              </button>
            )}
            <button
              onClick={buy}
              className=" outline-none rounded-lg  w-[120px] md:w-[120px]    lg:w-[150px] p-2 border-2 border-black  capitalize"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      {pay && (
        <ShippingForm
          product={{ ...product, size, color, quantity }}
          price={product.price * quantity}
          quantity={quantity}
          pay={pay}
          setPay={setPay}
        />
      )}

      <br />
      <SimilarProducts cat={product.categories} />
      <br />
      <PopularProducts />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Product;
