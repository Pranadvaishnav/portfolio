import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Research from "./pages/Research";
import Stack from "./pages/Stack";
import About from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f0f0f0" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/research" element={<Research />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
