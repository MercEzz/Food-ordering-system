import { Badge, Box, Button, Icon, Text } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";

const HeaderCartButton = (props) => {
  return (
    <Button
      cursor="pointer"
      fontStyle="inherit"
      border="none"
      bgColor="grey"
      color="white"
      p="0.5.75rem 3rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="25px"
      fontWeight="bold"
      _hover={{ bgColor: "grey.400" }}
      _active={{ bgColor: "grey.400" }}
      nClick={props.onClick}
    >
      <Box w="1.35rem" h="1.35rem" mr="0.5rem">
        <Icon as={BsCart2} />
      </Box>
      <Text>Your Cart</Text>
      <Badge
        bgColor="grey.200"
        p="0.25rem 1rem"
        borderRadius="25px"
        ml="1rem"
        fontWeight="bold"
        _hover={{ bgColor: "grey.200" }}
        _active={{ bgColor: "grey.200" }}
      >
        3
      </Badge>
    </Button>
  );
};

export default HeaderCartButton;
