import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Orders from '../../pages/Orders/Orders';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://genius-car-server-sabbir2809.vercel.app/services/${params.id}`),
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
