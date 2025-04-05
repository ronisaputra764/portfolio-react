import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import TechStack from "./components/TechStack";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProjectCard />
      <Experience />
      <Certificates />
      <TechStack />
    </>
  );
}

export default App;
