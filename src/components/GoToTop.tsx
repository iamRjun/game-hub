import { Box, Button, Flex } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box position="fixed" bottom="20px" right="15px" zIndex="1000">
      <Button onClick={scrollToTop} colorScheme="green" rounded="full">
        <Flex alignItems="center">
          <FaArrowUp />
        </Flex>
      </Button>
    </Box>
  );
};

export default GoToTop;
