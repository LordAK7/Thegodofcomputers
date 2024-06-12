import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import Web from "./components/Web";
import WebDevSkills from "./components/webSkills";
import Dev from "./components/Dev";
import DevSkills from "./components/devSkills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>

      <Navbar/>
      <section id="home">

        <Home/>
      </section>

      <section id="web">
        <Web/>
      </section>

      <section id="webDevSkills">
        <WebDevSkills/>
      </section>
      
      <section id="dev">
        <Dev/>
      </section>

      <section id="devSkills">
        <DevSkills/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

    </div>
  );
}
