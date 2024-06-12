import { useState } from "react";
import { Box, Heading, VStack, Input, Button, Checkbox, HStack, Text } from "@chakra-ui/react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading>Task Management</Heading>
        <HStack>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} align="stretch">
          {tasks.map((task, index) => (
            <HStack key={index} spacing={4}>
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TaskManagement;