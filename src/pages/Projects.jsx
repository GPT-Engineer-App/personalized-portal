import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Textarea, HStack, Tag, TagLabel, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", goals: [] });
  const [newGoal, setNewGoal] = useState("");
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});

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

  const handleRating = (projectIndex, rating) => {
    setRatings({ ...ratings, [projectIndex]: rating });
  };

  const handleReview = (projectIndex, review) => {
    setReviews({ ...reviews, [projectIndex]: review });
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
              <Heading size="sm">
                <Link as={RouterLink} to={`/projects/${index}`}>
                  {project.title}
                </Link>
              </Heading>
              <Text mt={2}>{project.description}</Text>
              <Heading size="xs" mt={2}>Goals</Heading>
              <VStack spacing={1} align="stretch" mt={2}>
                {project.goals.map((goal, goalIndex) => (
                  <Text key={goalIndex}>- {goal}</Text>
                ))}
              </VStack>
              <Box mt={4}>
                <Heading size="xs">Rate this project</Heading>
                <Input
                  type="number"
                  max={5}
                  min={1}
                  value={ratings[index] || ""}
                  onChange={(e) => handleRating(index, e.target.value)}
                  mt={2}
                />
              </Box>
              <Box mt={4}>
                <Heading size="xs">Leave a review</Heading>
                <Textarea
                  value={reviews[index] || ""}
                  onChange={(e) => handleReview(index, e.target.value)}
                  mt={2}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Projects;