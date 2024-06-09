import Navbar from "./components/Navbar";
import Home from "./components/Hero";
// import Timeline from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
// import More from "./components/More";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      {/* <More/> */}
      {/* <Timeline/> */}
    </div>
  );
}



 