import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "font-awesome/css/font-awesome.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import MainRoutes from "./routes";
import { useEffect } from "react";
function App() {
  var cartItem = []
  localStorage.setItem('cart', JSON.stringify(cartItem))
  localStorage.setItem('ItemInCart', '')
  return (
    <div>
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
