import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const InteractiveElement = ({ onClick, label }) => {
  return (
    <Box p={4}>
      <Button onClick={onClick} colorScheme="teal">
        {label}
      </Button>
    </Box>
  );
};

export default InteractiveElement;