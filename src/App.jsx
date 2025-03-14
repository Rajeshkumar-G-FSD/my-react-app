import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import "./App.css";

// Page Components
const Home = () => (
  <>
    <Helmet>
      <title>Home - My Website</title>
      <meta name="description" content="Welcome to the Home page of My Website." />
    </Helmet>
    <div className="p-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="mt-2">Welcome to the Home page!</p>
    </div>
  </>
);

const About = () => (
  <>
    <Helmet>
      <title>About - My Website</title>
      <meta name="description" content="Learn more about My Website." />
    </Helmet>
    <div className="p-4">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="mt-2">Learn more about us.</p>
    </div>
  </>
);

const Careers = () => (
  <>
    <Helmet>
      <title>Careers - My Website</title>
      <meta name="description" content="Explore career opportunities at My Website." />
    </Helmet>
    <div className="p-4">
      <h1 className="text-3xl font-bold">Careers Page</h1>
      <p className="mt-2">Explore career opportunities.</p>
    </div>
  </>
);

const Products = () => (
  <>
    <Helmet>
      <title>Products - My Website</title>
      <meta name="description" content="Check out our products." />
    </Helmet>
    <div className="p-4">
      <h1 className="text-3xl font-bold">Products Page</h1>
      <p className="mt-2">Check out our products.</p>
    </div>
  </>
);

const Contact = () => (
  <>
    <Helmet>
      <title>Contact - My Website</title>
      <meta name="description" content="Get in touch with us." />
    </Helmet>
    <div className="p-4">
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="mt-2">Get in touch with us.</p>
    </div>
  </>
);

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleHover = (page) => {
    setCurrentPage(page);
  };

  const handleLeave = () => {
    setCurrentPage("home"); // Reset to Home page when mouse leaves
  };

  return (
    <HelmetProvider>
      <div className="bg-background dark:bg-darkBackground min-h-screen">
        <Router>
          <Navbar onHover={handleHover} onLeave={handleLeave} />
          <Routes>
            <Route
              path="/"
              element={
                currentPage === "home" ? (
                  <Home />
                ) : currentPage === "about" ? (
                  <About />
                ) : currentPage === "careers" ? (
                  <Careers />
                ) : currentPage === "products" ? (
                  <Products />
                ) : (
                  <Contact />
                )
              }
            />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;