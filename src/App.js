import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Services />} />
        <Route path="*" element={<h1 className="center">Page Not Found.</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
