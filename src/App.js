import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Landing1 } from "./Components/Landing1";
import { Landing2 } from "./Components/Landing2";
import { Landing3 } from "./Components/Landing3";
import { Landing4 } from "./Components/Landing4";
import { Landing5 } from "./Components/Landing5";
import { Navbar } from "./Components/Navbar";
import { Service } from "./Components/Services/Service";
import { Doctor } from "./Components/Doctors/Doctor";
import { Pharmacy } from "./Components/Pharmacy/Pharmacy";
import { Diagnosis } from "./Components/Diagnosis/Diagnosis";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DoctorCard } from "./Components/Doctors/DoctorCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="space-y-2">
          <Hero />
          <Landing1 />
          <Landing2 />
          <Landing3 />
          <Landing4 />
          <Landing5 />
        </div>}>
        </Route>
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/doctor" element={<Doctor />} />
        <Route exact path="/doctorsingle" element={<DoctorCard />} />
        <Route exact path="/pharmacy" element={<Pharmacy />} />
        <Route exact path="/diagnosis" element={<Diagnosis />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
