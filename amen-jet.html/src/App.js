import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Goals from "./components/Goals";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Gallery />
      <Reviews />
      <Goals />
      <Footer />
    </div>
  );
}

export default App;
