import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const UserView = () => {
  const { id } = useParams();

  const [singleUser, setSingleUser] = useState(null);

  useEffect(() => {
    const featchSingleData = async () => {
      const singleData = await axios
        .get(
          `https://usermanagement-backend-fdqe.onrender.com/api/v1/singleUser/${id}`
        )
        .then(res => {
          // console.log(res.data.user);
          setSingleUser(res.data.user);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(singleUser);
    };
    if (!id) {
      return;
    }
    featchSingleData();
  }, []);

  window.scrollTo(0, 0);

  return (
    <div className="h-screen">
      <div className="mx-auto w-[700px]  my-10 p-6  shadow-md rounded-md border">
        <h2 className="text-2xl font-semibold text-center mb-4">
          User Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm">Name</label>
            <div className="text-lg font-medium text-gray-800">
              {singleUser?.name}
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Email</label>
            <div className="text-lg font-medium text-gray-800">
              {singleUser?.email}
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm ">Password</label>
            <div className="text-lg font-medium text-gray-800 ">
              {/* {singleUser?.password} */}
              $2b$10$OImO9AtZ.QfvsTxYXZm5R.iKO.Ocphkn5pKsC/MLlOP8PRrWzW5Wa
            </div>
          </div>
          <div>
            <label className="block text-gray-600 text-sm ">
              {singleUser?.createdAt}
            </label>
            <div className="text-lg font-medium text-gray-800 ">
              {singleUser?.createdAt}
            </div>
          </div>
          <div>
            <label className="block text-gray-600 text-sm ">
              {singleUser?.updatedAt}
            </label>
            <div className="text-lg font-medium text-gray-800 ">
              {singleUser?.updatedAt}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/manage-user"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserView;
