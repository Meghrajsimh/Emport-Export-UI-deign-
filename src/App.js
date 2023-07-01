import "./App.css";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Testimoinal from "./components/Testimonial/Testimoinal";
import WhyUS from "./components/whyUs/whyUs";
import Counter from "./components/whyUs/Counter";
import MoreWork from "./components/whyUs/MoreWork";
import Slider from "./components/slider/Slider";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Slider/>
      <Services />
      <WhyUS />
      <Counter />
      <MoreWork />
      <Testimoinal />
      <Contact />
      <Blog />
      <Footer />
    </Router>
  );
}

export default App;
