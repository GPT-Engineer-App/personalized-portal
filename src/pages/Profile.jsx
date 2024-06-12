import { useState } from "react";
import { Box, Heading, Text, VStack, Avatar, Tag, TagLabel, Input, Button, HStack, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const addSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const addProject = () => {
    if (newProject) {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Profile</Heading>
        <Box {...getRootProps()} border="2px dashed" p={4} textAlign="center">
          <input {...getInputProps()} />
          {avatar ? (
            <Avatar src={avatar} size="xl" />
          ) : (
            <Text>Drag 'n' drop an avatar image here, or click to select one</Text>
          )}
        </Box>
        <Box>
          <Heading size="md">Skills</Heading>
          <HStack spacing={2} mt={2}>
            {skills.map((skill, index) => (
              <Tag key={index} size="lg" colorScheme="teal">
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </HStack>
          <HStack mt={4}>
            <Input
              placeholder="Add a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <Button onClick={addSkill} colorScheme="teal">
              Add Skill
            </Button>
          </HStack>
        </Box>
        <Box>
          <Heading size="md">Projects</Heading>
          <VStack spacing={2} mt={2} align="stretch">
            {projects.map((project, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text>{project}</Text>
              </Box>
            ))}
          </VStack>
          <HStack mt={4}>
            <Input
              placeholder="Add a new project"
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />
            <Button onClick={addProject} colorScheme="teal">
              Add Project
            </Button>
          </HStack>
        </Box>
        <Box>
          <Heading size="md">Engagement Stats</Heading>
          <SimpleGrid columns={2} spacing={4} mt={2}>
            <Stat>
              <StatLabel>Projects Participated</StatLabel>
              <StatNumber>{projects.length}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Skills Added</StatLabel>
              <StatNumber>{skills.length}</StatNumber>
            </Stat>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;