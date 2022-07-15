import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const { data } = await axios.post(
        'https://opes-store.herokuapp.com/api/auth/register',
        { username, email, password }
      );
      console.log(data);

      navigate('/login');
    } else {
      console.log('wrong credientials');
    }
  };
  return (
    <div className=" bg-gray-200 w-full h-screen flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center justify-center">
        <div className=" headText   flex capitalize text-[40px] lg:text-[40px] font-bold">
          ope's clothes.
          {/* <div className="  ml-3  uppercase text-[30px] lg:text-[40px] font-bold"> */}
          {/* </div> */}
        </div>
        <p className="w-[350px]  text-center mb-4  lg:w-[600px] text-clip">
          Your number 1 clothes plug , For designers shirts , bags , trousers
          and jackets
        </p>
      </div>
      <div className=" w-[90%] md:w-[45%] lg:w-[30%] shadow-lg  bg-white  ">
        <form className=" p-5 lg:p-9" onSubmit={handleSubmit}>
          <div className=" text-[24px] mb-3  font-bold">Create an Account</div>
          <div className="mb-3">
            <input
              type={'text'}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="confirm password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white w-[150px] rounded-full bg-black hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <Link to={'/login'}>
            <div className=" text-[14px] mt-6 text-blue-600  font-light">
              Already have an account? Sign in
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
