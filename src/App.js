import "./App.css";
import Header from "./components/header/Header.jsx"
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonial from "./components/Testimonial/Testimonial";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
    </div>
  );
}

export default App;
