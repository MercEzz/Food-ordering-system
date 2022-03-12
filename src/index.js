import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./store/CartProvider";

ReactDOM.render(
  <ChakraProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
