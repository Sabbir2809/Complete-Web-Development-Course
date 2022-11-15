import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h3>Default Page</h3>,
    },
    {
      path: '/home',
      element: <h3>Home Page</h3>,
    },
    {
      path: '/about',
      element: <h3>About Page</h3>,
    },
  ]);
  return (
    <div className='App'>
      <h1>Explore React Router</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
