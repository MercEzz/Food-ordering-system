import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const carItems = (
    <UnorderedList listStyleType="none" margin="0" p="0">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <ListItem>{item.name}</ListItem>
      ))}
    </UnorderedList>
  );

  return (
    <>
      <Modal onClose={props.onClose}>
        {carItems}
        <Flex
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="bold"
          fontSize="1.5rem"
          m="1rem 0"
        >
          <Text>Total Amount</Text>
          <Text>35.62</Text>
        </Flex>
        <Box textAlign="right">
          <Button
            fontStyle="inherit"
            cursor="pointer"
            bgColor="transparent"
            color="grey.500"
            border="1px solid grey.500"
            p="0.5rem 2rem"
            borderRadius="25px"
            ml="1rem"
            _hover={{
              bgColor: "grey",
              borderColor: "grey",
              color: "white",
            }}
            _active={{ bgColor: "grey", borderColor: "grey", color: "white" }}
            onClick={props.onClose}
          >
            Close
          </Button>
          <Button
            fontStyle="inherit"
            cursor="pointer"
            bgColor="grey"
            color="white"
            border="1px solid grey.500"
            p="0.5rem 2rem"
            borderRadius="25px"
            ml="1rem"
            _hover={{ bgColor: "white", borderColor: "grey", color: "grey" }}
            _active={{ bgColor: "grey", borderColor: "grey", color: "white" }}
          >
            Order
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
