import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import RealTimeEditing from "./pages/RealTimeEditing.jsx";
import DiscussionForums from "./pages/DiscussionForums.jsx";
import KnowledgePortals from "./pages/KnowledgePortals.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/tasks" element={<TaskManagement />} />
        <Route exact path="/editing" element={<RealTimeEditing />} />
        <Route exact path="/forums" element={<DiscussionForums />} />
        <Route exact path="/knowledge-portals" element={<KnowledgePortals />} />
      </Routes>
    </Router>
  );
}

export default App;