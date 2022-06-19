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
import { useEffect, useState } from "react";
import { Loader } from "./Components/Loader";
import { Login } from "./Components/Auth/Login";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setvalue] = useState(10);
  
  useEffect(() => {
    setTimeout(() => {
      setvalue(40);
    }, 300);
    setTimeout(() => {
      setvalue(60);
    }, 300);
    setTimeout(() => {
      setvalue(80);
    }, 300);

    document.addEventListener("DOMContentLoaded", loaded());
    function loaded() {
      setTimeout(() => {
        setvalue(100);
      }, 1050);
      setTimeout(() => {
        setLoading(false);
      }, 1350);
    }
  }, []);
  const [path1, setpath1] = useState("/")
  const currentpath = (path)=>{
    setpath1(path);
  }
  
  
  return (
    <>
    {loading ? (
      <Loader value={value} />) :
    <div>
    <BrowserRouter>
      <div className={`${path1!==('/login' || '/signup')?'':'hidden'}`}><Navbar path ={currentpath} /></div>
      <Routes>
        <Route path="/" element={<div className="space-y-2">
          <Hero path ={currentpath}  />
          <Landing1 />
          <Landing2 />
          <Landing3 />
          <Landing4 />
          <Landing5 />
        </div>}>
        </Route>
        <Route exact path="/services" element={<Service  path ={currentpath} />} />
        <Route exact path="/doctor" element={<Doctor path ={currentpath} />} />
        <Route exact path="/doctorsingle" element={<DoctorCard />} />
        <Route exact path="/pharmacy" element={<Pharmacy path ={currentpath} />} />
        <Route exact path="/diagnosis" element={<Diagnosis path ={currentpath} />} />
        <Route exact path="/login" element={<Login path ={currentpath} />} />
      </Routes>
      <div className={`${path1!==('/login' || '/signup')?'':'hidden'}`}><Footer /></div>
    </BrowserRouter>
    </div>}
    </>
  );
}

export default App;
