import { Button, FormControl } from "@chakra-ui/react";
import InputI from "../../UI/InputI";

const MealItemForm = (props) => {
  return (
    <FormControl textAlign="right">
      <InputI
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
      >
        + Add
      </Button>
    </FormControl>
  );
};

export default MealItemForm;
