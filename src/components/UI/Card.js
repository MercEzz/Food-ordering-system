import { Box } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Box
      p="1rem"
      boxShadow="0 2px 8px rgba(0,0,0,0.25)"
      borderRadius="14px"
      bgColor="white"
    >
      {props.children}
    </Box>
  );
};

export default Card;
