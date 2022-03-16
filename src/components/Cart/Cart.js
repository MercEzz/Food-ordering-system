import { Flex, UnorderedList, Text, Box, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const carItems = (
    <UnorderedList
      listStyleType="none"
      margin="0"
      p="0"
      maxH="20rem"
      overflow="auto"
    >
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </UnorderedList>
  );

  const modalActions = (
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
      {hasItems && (
        <Button
          fontStyle="inherit"
          cursor="pointer"
          bgColor="grey"
          color="white"
          border="1px solid grey.500"
          p="0.5rem 2rem"
          borderRadius="25px"
          ml="1rem"
          _hover={{
            bgColor: "white",
            borderColor: "grey",
            color: "grey",
          }}
          _active={{
            bgColor: "grey",
            borderColor: "grey",
            color: "white",
          }}
          onClick={orderHandler}
        >
          Order
        </Button>
      )}
    </Box>
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
          <Text>{totalAmount}</Text>
        </Flex>
        {isCheckout && <Checkout onCancel={props.onClose} />}
        {!isCheckout && modalActions}
      </Modal>
    </>
  );
};

export default Cart;
