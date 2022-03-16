import { Box, Button, Flex, Heading, ListItem, Text } from "@chakra-ui/react";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <ListItem
      display={"flex"}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid grey"
      p="1rem 0"
      margin="1rem 0"
    >
      <Box>
        <Heading m="0 0 0.5rem 0" color="#363636">
          {props.name}
        </Heading>
        <Flex
          w="10rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="bold" color="blue.700">
            {price}
          </Text>
          <Text
            fontWeight="bold"
            border="1px solid #ccc"
            p="0.25rem 0.75rem"
            borderRadius="6px"
            color="#363636"
          >
            x {props.amount}
          </Text>
        </Flex>
      </Box>
      <Flex display="flex" flexDir={["column", "row"]}>
        <Button
          fontStyle="inherit"
          fontWeight="bold"
          fontSize="1.25rem"
          color="blue.400"
          border="1px solid blue.400"
          w="3rem"
          textAlign="center"
          borderRadius="6px"
          bgColor="transparent"
          cursor="pointer"
          ml="1rem"
          m=".25rem"
          _hover={{ bgColor: "blue.400", color: "white" }}
          _active={{ bgColor: "blue.400", color: "white" }}
          onClick={props.onRemove}
        >
          -
        </Button>
        <Button
          fontStyle="inherit"
          fontWeight="bold"
          fontSize="1.25rem"
          color="blue.400"
          border="1px solid blue.400"
          w="3rem"
          textAlign="center"
          borderRadius="6px"
          bgColor="transparent"
          cursor="pointer"
          ml="1rem"
          m=".25rem"
          _hover={{ bgColor: "blue.400", color: "white" }}
          _active={{ bgColor: "blue.400", color: "white" }}
          onClick={props.onAdd}
        >
          +
        </Button>
      </Flex>
    </ListItem>
  );
};

export default CartItem;
