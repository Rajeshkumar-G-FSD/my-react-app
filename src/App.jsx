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
    <div className="min-h-screen bg-blue-500 p-4 text-white flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">BUILD YOUR IDEA IN</h1>
      <h2 className="text-4xl font-bold mb-8">FEW MINUTES.</h2>
      <p className="text-xl mb-8">
        Build your own website or application at <span className="font-bold">9999/per Month</span>
      </p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300">
        DOWNLOAD NOW
      </button>
    </div>
  </>
);

const About = () => (
  <>
    <Helmet>
      <title>About - My Website</title>
      <meta name="description" content="Learn more about My Website." />
    </Helmet>
    <div className="min-h-screen bg-blue-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">About us</h1>
      <p className="text-lg mb-4">
        Innovatise, the company behind myFitApp
      </p>
      <p className="text-lg mb-4">
        Innovatise’s myFitApp is an open, flexible, hybrid fitness platform gyms, leisure centres and health clubs use to strengthen their brand, retain members, acquire new ones and deliver digital fitness using the unique power of mobile.
      </p>
      <p className="text-lg mb-4">
        With over 4,000 sites and over 20 million app downloads worldwide, Innovatise is the leader in providing marketing-focused branded apps for gyms.
      </p>
      <p className="text-lg">
        Innovatise is a subsidiary of Clubessential Holdings, the leading provider of Software as a Service and embedded payment solutions to more than 20,000 private clubs, public golf courses, health & fitness clubs, spas, military organizations, municipalities, and camp organizations across the globe.
      </p>
    </div>
  </>
);

const Careers = () => (
  <>
    <Helmet>
      <title>Careers - My Website</title>
      <meta name="description" content="Explore career opportunities at My Website." />
    </Helmet>
    <div className="min-h-screen bg-blue-500 p-4 text-white">
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
    <div className="min-h-screen bg-blue-500 p-4 text-white">
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
    <div className="min-h-screen bg-blue-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        Ready to take your business to the next level? Contact us today to learn more about how Tricia Technologies Pvt. Ltd. can help you achieve your goals with our world-class software solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">UAE</h2>
          <p className="text-lg mb-4">Sharjah Media City, Sharjah, UAE</p>
          <h2 className="text-2xl font-bold mb-4">INDIA</h2>
          <p className="text-lg mb-4">
            4th Floor STPI BUILDING, Technopark Campus, Kariavattom, Trivandrum Kerala - 695581
          </p>
          <p className="text-lg mb-4">
            TC 20/2127-2, Karamana, Trivandrum, Kerala - 695002
          </p>
          <p className="text-lg mb-4">+91 471 2937788</p>
          <p className="text-lg mb-4">+91 944 731 8527</p>
          <p className="text-lg">info@tricia.com</p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/400" // Default image placeholder
            alt="Contact Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
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
      <div className="min-h-screen bg-blue-500">
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