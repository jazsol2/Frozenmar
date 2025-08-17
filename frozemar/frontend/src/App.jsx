import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Planta from "./pages/divisions/Planta";
import Camaronera from "./pages/divisions/Camaronera";


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/divisions/planta" element={<Planta />} />
          <Route path="/divisions/camaronera" element={<Camaronera />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
