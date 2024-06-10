import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import Web from "./components/Web";
import WebDevSkills from "./components/webSkills";
import Dev from "./components/Dev";
import DevSkills from "./components/devSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Web/>
      <WebDevSkills/>
      <Dev/>
      <DevSkills/>
      <Contact/>
      <Footer/>
    </div>
  );
}



 