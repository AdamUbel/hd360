import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
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
    </BrowserRouter>
  );
}

export default App;
