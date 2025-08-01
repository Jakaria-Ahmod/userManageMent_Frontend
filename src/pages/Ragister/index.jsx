import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navite = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    //
    setName('');
    setEmail('');
    setPassword('');
    toast.success('user create sucessfully');
    //
    const dataPush = await axios.post(
      'https://usermanagement-backend-fdqe.onrender.com/api/v1/register',
      newUser
    );
    console.log(dataPush);
    navite('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="w-[100%]">
          <Link to="/login">
            <span className="bg-black text-center text-white p-2 mt-2 rounded-md w-full block">
              sing-in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
