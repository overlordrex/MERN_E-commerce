import React, { useState } from 'react';
import { loginError, loginStart, loginSucess } from '../redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetching, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const { data } = await axios.post(
        'https://opes-store.herokuapp.com/api/auth/login',
        { username, password }
      );
      dispatch(loginSucess(data));
      navigate('/');
    } catch (err) {
      dispatch(loginError());
      console.log(err);
    }
  };
  return (
    <div className=" bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className=" w-[90%] md:w-[45%] lg:w-[30%]  bg-white  ">
        <form className="p-5 lg:p-7 shadow-lg">
          <div className=" text-[24px] mb-3  font-bold">Login Account</div>

          {error && (
            <div className=" text-sm mb-6 text-red-700">
              Please check crediential and try again
            </div>
          )}
          <div className="mb-3">
            <input
              type={'text'}
              placeholder="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {fetching ? (
            <button
              type="submit"
              className="text-white w-[150px] bg-black focus:ring-4  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Loading
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white rounded-full w-[150px] bg-black  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}

          <Link to={'/register'}>
            <div className=" text-[14px] mt-6 text-blue-600  font-light">
              Don't have an account? Create Account
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
