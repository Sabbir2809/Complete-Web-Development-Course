import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import Quiz from './components/Quiz/Quiz';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quiz></Quiz>,
        },
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
      ],
    },
    // NotFound URL
    {
      path: '*',
      element: <NotFound></NotFound>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
