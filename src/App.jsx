import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Footer from "./components/Footer";
import AddingTestimony from "./pages/adding-testimony";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import Bible from "./pages/bible";
import Testimony from "./pages/testimony";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adding-testimony" element={<AddingTestimony />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/bible" element={<Bible />} />
            <Route path="/testimony" element={<Testimony />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;
