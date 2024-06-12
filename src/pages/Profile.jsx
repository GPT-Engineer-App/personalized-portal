import { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Avatar, Tag, TagLabel, Input, Button, HStack, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const dummyProfiles = [
  {
    name: "David Lindh",
    avatar: "https://via.placeholder.com/150",
    skills: ["JavaScript", "React", "Node.js"],
    projects: ["Project A", "Project B"],
    recommendations: ["User1", "User2"],
    collaborators: ["Collaborator1", "Collaborator2"],
    projectRecommendations: ["Project1", "Project2"],
    endorsements: ["Great developer!", "Excellent team player!"]
  },
  {
    name: "Babila Fofuleng",
    avatar: "https://via.placeholder.com/150",
    skills: ["Python", "Django", "Machine Learning"],
    projects: ["Project C", "Project D"],
    recommendations: ["User3", "User4"],
    collaborators: ["Collaborator3", "Collaborator4"],
    projectRecommendations: ["Project3", "Project4"],
    endorsements: ["Highly skilled!", "Innovative thinker!"]
  },
  {
    name: "Shima Askari",
    avatar: "https://via.placeholder.com/150",
    skills: ["Java", "Spring", "Microservices"],
    projects: ["Project E", "Project F"],
    recommendations: ["User5", "User6"],
    collaborators: ["Collaborator5", "Collaborator6"],
    projectRecommendations: ["Project5", "Project6"],
    endorsements: ["Detail-oriented!", "Great problem solver!"]
  },
  {
    name: "Seham Murai",
    avatar: "https://via.placeholder.com/150",
    skills: ["C#", ".NET", "Azure"],
    projects: ["Project G", "Project H"],
    recommendations: ["User7", "User8"],
    collaborators: ["Collaborator7", "Collaborator8"],
    projectRecommendations: ["Project7", "Project8"],
    endorsements: ["Excellent coder!", "Team leader!"]
  }
];

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [projectRecommendations, setProjectRecommendations] = useState([]);
  const [endorsements, setEndorsements] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(dummyProfiles[0]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
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

  const handleEndorsement = (endorsement) => {
    if (endorsement) {
      setEndorsements([...endorsements, endorsement]);
    }
  };

  useEffect(() => {
    try {
      console.log("Selected Profile:", selectedProfile);
      setRecommendations(selectedProfile.recommendations);
      setCollaborators(selectedProfile.collaborators);
      setProjectRecommendations(selectedProfile.projectRecommendations);
      setSkills(selectedProfile.skills);
      setProjects(selectedProfile.projects);
      setEndorsements(selectedProfile.endorsements);
      setAvatar(selectedProfile.avatar);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [selectedProfile]);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Profile</Heading>
        <HStack spacing={4}>
          {dummyProfiles.map((profile, index) => (
            <Button key={index} onClick={() => setSelectedProfile(profile)}>
              {profile.name}
            </Button>
          ))}
        </HStack>
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
        <Box>
          <Heading size="md">Recommendations</Heading>
          <VStack spacing={2} mt={2} align="stretch">
            {recommendations.map((recommendation, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text>{recommendation}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box>
          <Heading size="md">Potential Collaborators</Heading>
          <VStack spacing={2} mt={2} align="stretch">
            {collaborators.map((collaborator, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text>{collaborator}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box>
          <Heading size="md">Project Recommendations</Heading>
          <VStack spacing={2} mt={2} align="stretch">
            {projectRecommendations.map((project, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text>{project}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box>
          <Heading size="md">Community Endorsements</Heading>
          <VStack spacing={2} mt={2} align="stretch">
            {endorsements.map((endorsement, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text>{endorsement}</Text>
              </Box>
            ))}
          </VStack>
          <Input
            placeholder="Add an endorsement"
            mt={4}
            onBlur={(e) => handleEndorsement(e.target.value)}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;