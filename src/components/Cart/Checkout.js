import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim() === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredName && enteredStreet && enteredPostalCode && enteredCity;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  return (
    <FormControl overflow="auto" h="15rem">
      <Box>
        <FormLabel>Your Name</FormLabel>
        <Input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && (
          <Text color="red.600">Please enter a valid name!</Text>
        )}
      </Box>
      <Box>
        <FormLabel>street</FormLabel>
        <Input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && (
          <Text color="red.600">Please enter a valid Street!</Text>
        )}
      </Box>
      <Box>
        <FormLabel>Postal Code</FormLabel>
        <Input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && (
          <Text color="red.600">
            Please enter a valid postal code (5 characters long)!
          </Text>
        )}
      </Box>
      <Box>
        <FormLabel>City</FormLabel>
        <Input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && (
          <Text color="red.600">Please enter a valid city!</Text>
        )}
      </Box>
      <Flex mt="4">
        <Button mr={"5"} size="sm" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button size="sm" onClick={confirmHandler}>
          Confirm
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Checkout;
