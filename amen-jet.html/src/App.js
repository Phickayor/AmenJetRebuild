import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Home />
      </div>
      <Services />
      <Goals />
      <Gallery />
      <Reviews />
      <Contact />
      {/* <Footer />
       */}
    </div>
  );
}

export default App;
