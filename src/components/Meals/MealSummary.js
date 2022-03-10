import { Box, Text, Heading } from "@chakra-ui/react";

const MealSummary = () => {
  return (
    <Box
      text-textAlign="center"
      maxW="45rem"
      w="90%"
      m="auto"
      mt="-10rem"
      pos="relative"
      bgColor="#383838"
      color="white"
      borderRadius="14px"
      p="1rem"
      boxShadow="0 1px 18px 10px rgba(0,0,0, 0.25)"
    >
      <Heading fontSize="2rem" mt="0">
        Delicious Food, Delivered To You
      </Heading>
      <Text>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Text>
      <Text>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Text>
    </Box>
  );
};

export default MealSummary;
