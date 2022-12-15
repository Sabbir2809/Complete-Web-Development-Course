import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../login/Login';
import Register from '../../login/Register';
import Blogs from '../../pages/Blog/Blogs';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import UserProfile from '../../pages/Others/UserProfile/UserProfile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/courses',
        loader: () => {
          return fetch(`https://smart-learning-center-sever-sabbir2809.vercel.app/courses`);
        },
        element: <Courses></Courses>,
      },
      {
        path: '/courses/:id',
        loader: ({ params }) => {
          return fetch(
            `https://smart-learning-center-sever-sabbir2809.vercel.app/courses/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        loader: () => {
          return fetch(`https://smart-learning-center-sever-sabbir2809.vercel.app/blog`);
        },
        element: <Blogs></Blogs>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
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
        path: '/profile',
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);
