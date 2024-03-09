import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Leader from "./Components/Leader";
import Reviews from "./Components/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Leader />
      <Reviews />
    </div>
  );
}

export default App;
