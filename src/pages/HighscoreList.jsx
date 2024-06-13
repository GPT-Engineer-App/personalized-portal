import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const HighscoreList = () => {
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    // Placeholder for fetching highscores
    const fetchedHighscores = [
      { username: "User1", score: 100 },
      { username: "User2", score: 90 },
      { username: "User3", score: 80 },
    ];
    setHighscores(fetchedHighscores);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Highscore List</Heading>
        {highscores.map((user, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Text>{index + 1}. {user.username} - {user.score} points</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default HighscoreList;