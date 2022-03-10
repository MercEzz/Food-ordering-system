import { Box, ListItem, Text } from "@chakra-ui/react";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <ListItem
      display={"flex"}
      justifyContent="space-between"
      m="1rem"
      pb="1rem"
      borderBottom="1px solid #ccc"
    >
      <Box>
        <Text m="0 0 0.25rem 0" fontWeight={"bold"}>
          {props.name}
        </Text>
        <Text fontStyle="italic">{props.description}</Text>
        <Text
          mt="0.25rem"
          fontWeight="bold"
          color="blue.700"
          fontSize="1.25rem"
        >
          {price}
        </Text>
      </Box>
      <Box>
        <MealItemForm id={props.id} />
      </Box>
    </ListItem>
  );
};

export default MealItem;
