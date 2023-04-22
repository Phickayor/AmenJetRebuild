import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Faqs from "./components/Faqs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      {/*
      <About />
      <Faqs /> */}
    </div >
  );
}

export default App;
