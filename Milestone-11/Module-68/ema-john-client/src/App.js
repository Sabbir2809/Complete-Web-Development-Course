import './App.css';
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          // loader: () => {
          //   return fetch('http://localhost:5000/products');
          // },
          element: <Shop />,
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: '/inventory',
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: '/shipping',
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
