import "./App.css";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import PagesSection from "./components/PagesSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HomeSection />
        <PagesSection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection/>
      </div>
    </>
  );
}

export default App;
