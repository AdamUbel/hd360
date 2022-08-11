import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Services />} />
        <Route path="/our-process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<h1 className="center">Page Not Found.</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
