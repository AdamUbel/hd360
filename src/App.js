import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import "./App.css";
import Equine from "./pages/Equine";
import Business from "./pages/Business";
import Events from "./pages/Weddings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Services />} />
        <Route path="/equine" element={<Equine />} />
        <Route path="/business" element={<Business />} />
        <Route path="/events" element={<Events />} />
        <Route path="/our-process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <h1 className="center" style={{ margin: "5rem 0rem 70vh 0rem" }}>
              <a href="/" style={{ display: "block" }}>
                Page Not Found.
              </a>
            </h1>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
