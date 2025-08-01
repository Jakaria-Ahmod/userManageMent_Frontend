import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import Register from './pages/Ragister';
import Login from './pages/Login';
import RooteLayout from './RooteLayout';
import ManeageUser from './pages/ManageUser';
import { ToastContainer } from 'react-toastify';
import UserView from './pages/userview';
import UserEdite from './pages/userEdite';
import RouteNotFound from './pages/not';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RooteLayout></RooteLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/sigup',
          element: <Register></Register>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/manage-user',
          element: <ManeageUser></ManeageUser>,
        },
        {
          path: '/user-view/:id',
          element: <UserView></UserView>,
        },
        {
          path: '/user-edit/:id',
          element: <UserEdite></UserEdite>,
        },
        {
          path: '*',
          element: <RouteNotFound></RouteNotFound>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />,
      <ToastContainer />
    </div>
  );
}

export default App;
