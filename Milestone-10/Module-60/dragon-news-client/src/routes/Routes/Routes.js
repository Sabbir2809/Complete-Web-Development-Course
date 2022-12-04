import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../login/Login/Login';
import Register from '../../login/Login/Register';
import Category from '../../pages/Category/Category/Category';
import Home from '../../pages/Home/Home/Home';
import News from '../../pages/News/News/News';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => {
          return fetch(`http://localhost:5000/news`);
        },
      },
      {
        path: '/category/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <Category></Category>,
      },
      {
        path: '/news/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
        element: <News></News>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);
