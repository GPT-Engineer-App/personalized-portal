import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Notification from "./components/Notification.jsx";
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
import DomainDefinitions from "./pages/DomainDefinitions.jsx";
import Donation from "./pages/Donation.jsx";
import HighscoreList from "./pages/HighscoreList.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

function App() {
  const [notifications, setNotifications] = useState([
    { message: "Welcome to the platform!", type: "info" },
    { message: "You have a new message.", type: "success" },
  ]);
  const [projects, setProjects] = useState([
    { title: "Project A", description: "Description A", goals: ["Goal A1", "Goal A2"] },
    { title: "Project B", description: "Description B", goals: ["Goal B1", "Goal B2"] },
  ]);

  return (
    <Router>
      <Navbar />
      <Notification notifications={notifications} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/projects/:id" element={<ProjectDetail projects={projects} />} />
        <Route exact path="/tasks" element={<TaskManagement />} />
        <Route exact path="/editing" element={<RealTimeEditing />} />
        <Route exact path="/forums" element={<DiscussionForums />} />
        <Route exact path="/knowledge-portals" element={<KnowledgePortals />} />
        <Route exact path="/domain-definitions" element={<DomainDefinitions />} />
        <Route exact path="/donation" element={<Donation />} />
        <Route exact path="/highscore-list" element={<HighscoreList />} />
      </Routes>
    </Router>
  );
}

export default App;