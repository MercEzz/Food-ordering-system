import { Badge, Box, Button, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import CartContext from "../../store/cart-context";

const MotionBtn = motion(Button);

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <MotionBtn
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
      onClick={props.onClick}
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
        {numberOfCartItems}
      </Badge>
    </MotionBtn>
  );
};

export default HeaderCartButton;
