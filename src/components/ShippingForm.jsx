import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';

const ShippingForm = ({ price, quantity, product, pay, setPay }) => {
  const userId = useSelector((state) => state.user.currentUser._id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // const navigate = useNavigate();

  const payment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_820864edf00e25d73eeb6bf0d1df11ff33fa62e9',
      amount: price * 100,
      email,
      name,
      onSuccess(transaction) {
        setPay(!pay);
        toast.success('Transaction successful');
      },
      oncancel() {
        console.log('cancel');
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      state === '' ||
      city === '' ||
      address === '' ||
      phoneNumber === ''
    ) {
      console.log('no way');
    } else {
      try {
        const { data } = await axios.post(
          `https://opes-clothes.herokuapp.com/api/orders`,
          {
            userId,
            state,
            city,
            address,
            phoneNumber,
            product,
            quantity,
            price,
          }
        );
        console.log(data);

        payment();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" bg-[rgba(0,0,0,0.8)] absolute top-0 z-30  w-full h-screen flex items-center justify-center">
      <div className=" w-[95%] md:w-[45%] lg:w-[30%]   bg-white  ">
        <form className=" p-5 lg:px-5 lg:py-9">
          <div className=" flex justify-between items-center">
            <div>
              <div className=" text-[24px]   font-light">Delivery info</div>
              <div className=" text-[14px] mb-6  font-light">
                information shared are protected.
              </div>
            </div>

            <IoCloseSharp onClick={() => setPay(!pay)} fontSize={25} />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type={'text'}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex items-center  gap-4  mb-3">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                State
              </label>
              <input
                type="text"
                placeholder="Oyo"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className=" flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                City
              </label>
              <input
                type="text"
                placeholder="Ibadan"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Address
            </label>
            <input
              type={'text'}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type={'text'}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="0815 233 455"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white rounded-full uppercase w-[150px] bg-black hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
