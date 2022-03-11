import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <Flex
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        h="5rem"
        bg={"gray.700"}
        color="white"
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        p="0 10%"
        boxShadow="0 2px 8px rgba(0,0,0,0.25)"
        zIndex="10"
      >
        <Heading size="xl">Meals</Heading>
        <HeaderCartButton onClick={props.onShowCart} />
      </Flex>
      <Box w="100%" h="25rem" zIndex="0" overflow="hidden">
        <Image
          src={mealImg}
          alt="A table full of delicious food!"
          w="110%"
          h="100%"
          objectFit="cover"
          // transform={"rotateZ(-5deg) translateY(-4rem) translateX(-1rem)"}
        />
      </Box>
    </>
  );
};

export default Header;
