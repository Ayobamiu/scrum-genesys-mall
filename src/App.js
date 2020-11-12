import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "font-awesome/css/font-awesome.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import MainRoutes from "./routes";

function App() {
  return (
    <div>
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
