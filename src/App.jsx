
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from './pages/Services';
import Header from './components/Header';
import Footer from "./components/Footer";
import { ProductDetail } from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import Blog from "./pages/BlogPage";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductDetail" element={<ProductDetail />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
