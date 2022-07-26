import "./App.css";
import Navbar from "./Components/Navbar2";
import Banner from "./Components/Banner";
import DirectionStack from "./Components/Stacks";
import Aboutus from "./Components/About";
import Services2 from "./Components/Services2";
import Testimonial from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Aboutus />
      <DirectionStack />
      {/*} <Services2 />
      <Testimonial />
      <ContactForm />
      <Footer />  */}
    </div>
  );
}

export default App;
