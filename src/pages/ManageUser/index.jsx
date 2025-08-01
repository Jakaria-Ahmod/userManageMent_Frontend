import axios, { all } from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';

const ManageUser = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      const allUser = await axios
        .get(' https://usermanagement-backend-fdqe.onrender.com/api/v1/allUser')
        .then(res => {
          setUser(res.data.users);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(user);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  const handleDelete = async id => {
    await axios
      .delete(
        `https://usermanagement-backend-fdqe.onrender.com/api/v1/deleteUser/${id}`
      )
      .then(res => {
        console.log('user delte sucess', res);
        setIsLoadingDelete(false);
      })
      .catch(err => {
        console.log(err);
      });
    const filterUser = user.filter(user => user._id !== id);
    setUser(filterUser);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left text-sm">
              <th className="py-3 px-4 border-b">SL</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Password</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable tbody wrapper */}
        <div className="h-[400px] overflow-y-auto">
          <table className="min-w-full bg-white">
            <tbody>
              {user.length > 0 ? (
                user.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-4 border-b">{index + 1}</td>
                    <td className="py-3 px-4 border-b">{item?.name}</td>
                    <td className="py-3 px-4 border-b">{item?.email}</td>
                    <td className="py-3 px-4 border-b">
                      {item?.password.substring(0, 5)}...
                    </td>
                    <td className="py-3 px-4 border-b text-center space-x-2">
                      <Link
                        to={`/user-view/${item?._id}`}
                        className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
                      >
                        View
                      </Link>
                      <Link
                        to={`/user-edit/${item?._id}`}
                        className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="bg-red-500 cursor-pointer text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No users
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
