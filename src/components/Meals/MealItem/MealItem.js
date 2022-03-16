import { Box, ListItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

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
        <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
      </Box>
    </ListItem>
  );
};

export default MealItem;
