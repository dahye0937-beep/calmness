import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AboutMe from "./components/sections/About/AboutMe";
import Projects from "./components/sections/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/stay" element={<ProjectDetail />} />
        </Route>
      </Routes>
  );
}

export default App;
