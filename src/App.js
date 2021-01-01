import "./App.css";
import NavBar from "./components/NavBar";
import "font-awesome/css/font-awesome.css";
import Footer from "./components/Footer";
import MainRoutes from "./routes";
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
