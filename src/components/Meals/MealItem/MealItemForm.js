import { Button, FormControl, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import InputI from "../../UI/InputI";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <FormControl textAlign="right">
      <InputI
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button
        fontStyle="inherit"
        cursor="pointer"
        bgColor="blue.700"
        border="1px solid grey.200"
        color="white"
        p="0.25rem 2rem"
        borderRadius="20px"
        fontWeight="bold"
        _hover={{ bgColor: "grey.500", borderColor: "grey.500" }}
        _active={{ bgColor: "grey.500", borderColor: "grey.500" }}
        onClick={submitHandler}
      >
        + Add
      </Button>
      {!amountIsValid && <Text>Please enter a valid amount (1-5).</Text>}
    </FormControl>
  );
};

export default MealItemForm;
