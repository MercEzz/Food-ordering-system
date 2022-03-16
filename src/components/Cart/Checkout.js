import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl>
      <Box>
        <FormLabel>Your Name</FormLabel>
        <Input type="text" id="name" />
      </Box>
      <Box>
        <FormLabel>street</FormLabel>
        <Input type="text" id="street" />
      </Box>
      <Box>
        <FormLabel>Postal Code</FormLabel>
        <Input type="text" id="postal" />
      </Box>
      <Box>
        <FormLabel>City</FormLabel>
        <Input type="text" id="city" />
      </Box>
      <Flex mt="4">
        <Button mr={"5"} onClick={props.onCancel}>
          Cancel
        </Button>
        <Button onClick={confirmHandler}>Confirm</Button>
      </Flex>
    </FormControl>
  );
};

export default Checkout;
