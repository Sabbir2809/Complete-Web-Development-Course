import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../login/Login/Login';
import Register from '../../login/Login/Register';
import Category from '../../pages/Category/Category/Category';
import Home from '../../pages/Home/Home/Home';
import News from '../../pages/News/News/News';
import Profile from '../../pages/Others/Profile/Profile';
import TermsAndConditions from '../../pages/Others/TermsAndConditions/TermsAndContitions';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => {
          return fetch(`https://dragon-news-server-brown-one.vercel.app/news`);
        },
      },
      {
        path: '/category/:id',
        loader: ({ params }) => {
          return fetch(`https://dragon-news-server-brown-one.vercel.app/category/${params.id}`);
        },
        element: <Category></Category>,
      },
      {
        path: '/news/:id',
        loader: ({ params }) => {
          return fetch(`https://dragon-news-server-brown-one.vercel.app/news/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
