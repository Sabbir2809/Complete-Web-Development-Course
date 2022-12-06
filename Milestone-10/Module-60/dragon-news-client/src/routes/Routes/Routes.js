import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../login/Login/Login';
import Register from '../../login/Login/Register';
import Category from '../../pages/Category/Category/Category';
import Home from '../../pages/Home/Home/Home';
import News from '../../pages/News/News/News';
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
    ],
  },
]);
