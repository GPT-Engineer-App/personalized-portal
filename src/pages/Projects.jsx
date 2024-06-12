import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Textarea, HStack, Tag, TagLabel } from "@chakra-ui/react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", goals: [] });
  const [newGoal, setNewGoal] = useState("");

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ title: "", description: "", goals: [] });
    }
  };

  const addGoal = () => {
    if (newGoal) {
      setNewProject({ ...newProject, goals: [...newProject.goals, newGoal] });
      setNewGoal("");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Projects</Heading>
        <Box>
          <Heading size="md">Create New Project</Heading>
          <Input
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            mt={2}
          />
          <Textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            mt={2}
          />
          <HStack mt={2}>
            <Input
              placeholder="Add a goal"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
            />
            <Button onClick={addGoal} colorScheme="teal">
              Add Goal
            </Button>
          </HStack>
          <HStack spacing={2} mt={2}>
            {newProject.goals.map((goal, index) => (
              <Tag key={index} size="lg" colorScheme="teal">
                <TagLabel>{goal}</TagLabel>
              </Tag>
            ))}
          </HStack>
          <Button onClick={addProject} colorScheme="teal" mt={4}>
            Create Project
          </Button>
        </Box>
        <Box>
          <Heading size="md">Existing Projects</Heading>
          {projects.map((project, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mt={4}>
              <Heading size="sm">{project.title}</Heading>
              <Text mt={2}>{project.description}</Text>
              <Heading size="xs" mt={2}>Goals</Heading>
              <VStack spacing={1} align="stretch" mt={2}>
                {project.goals.map((goal, goalIndex) => (
                  <Text key={goalIndex}>- {goal}</Text>
                ))}
              </VStack>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Projects;