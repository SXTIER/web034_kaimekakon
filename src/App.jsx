import React from 'react';
import Logo from './assets/logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/1_MainNav.jsx';
import Footer from './components/10_MainFooter.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/', element: <Footer /> },
    ],
  },

  {},
  {},
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
