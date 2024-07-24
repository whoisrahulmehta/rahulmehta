import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Subscribe from "./pages/Subscribe";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Errorpage from "./components/Errorpage";
import LocomotiveScroll from "locomotive-scroll";
import Loadingpage from "./components/Loadingpage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {loading ? (
        <Loadingpage />
      ) : (
        <Router>
          <Layout data-scroll-container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/subscribe" element={<Subscribe />} /> */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Errorpage />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;

/* 

import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { createHashRouter, RouterProvider, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import RouteLoading from "./components/RouteLoading";

// Define routes
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/subscribe", element: <Subscribe /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

// Loading Component
function LoadingComponent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Show for 1 second
    return () => clearTimeout(timer);
  }, [location.key]);

  return loading ? <RouteLoading /> : null;
}

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <LoadingComponent />
      </RouterProvider>
    </>
  );
}

export default App;

*/
