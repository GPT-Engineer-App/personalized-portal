import { Box, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Donation = () => {
  const [amount, setAmount] = useState("");

  const handleDonation = () => {
    // Placeholder for donation logic
    console.log("Donated:", amount);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Donate to Projects</Heading>
        <Text>Your contributions help us achieve our goals and make a positive impact.</Text>
        <Input
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          mt={2}
        />
        <Button onClick={handleDonation} colorScheme="teal" mt={4}>
          Donate
        </Button>
      </VStack>
    </Box>
  );
};

export default Donation;