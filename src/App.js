import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Landing1 } from "./Components/Landing1";
import { Landing2 } from "./Components/Landing2";
import { Landing3 } from "./Components/Landing3";
import { Landing4 } from "./Components/Landing4";
import { Landing5 } from "./Components/Landing5";
import { Navbar } from "./Components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Service } from "./Components/Services/Service";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="">
          <Hero />
          <Landing1 />
          <Landing2 />
          <Landing3 />
          <Landing4 />
          <Landing5 />
        </div>}>
        </Route>
        <Route exact path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
