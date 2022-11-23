import React from 'react';
import './Blog.css';

// Blog Array of Object Data
const blogs = [
  {
    id: 1,
    img: 'https://reactrouter.com/twitterimage.jpg',
    title: 'What is the purpose of React Router?',
    description: `Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.`,
  },
  {
    id: 2,
    img: 'https://miro.medium.com/max/940/1*LgZWWGqdL76uUChz7gAhMw.png',
    title: 'What does context API work in React JS?',
    description: `Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.`,
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--5u-MHaMy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/l7ci1s4hjn2yrmovjh0s.png',
    title: 'What is useRef hook?',
    description: `useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. Some of the use cases of useRef hook are: 1. To access DOM elements 2.To persist values in successive renders`,
  },
];

const Blog = () => {
  return (
    <div className='blogs'>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-card'>
          <img className='image' src={blog.img} alt='' />
          <div>
            <h2 className='blog-title'> {blog.title}</h2>
            <p>
              <strong>Description: </strong>
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
