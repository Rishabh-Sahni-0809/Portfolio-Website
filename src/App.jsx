import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import Tech from "./components/Tech";
import Works from "./components/Works";
// import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white dark:bg-primary transition-colors duration-300'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div id="home">
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Hackathons />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
