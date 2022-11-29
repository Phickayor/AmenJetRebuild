import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
// // import Gallery from "./components/Gallery";
// // import Reviews from "./components/Reviews";
// // import Goals from "./components/Goals";
// // import Footer from "./components/Footer";
import "./App.css";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Home />
      </div>
      <Services />
      {/* <Gallery />
      <Reviews />
      <Goals />
      <Footer />
      <Contact/>*/}
    </div>
  );
}

export default App;
