import { Box } from "@chakra-ui/react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      h="100vh"
      zIndex="20"
      bgColor="rgba(0,0,0, 0.75)"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Box
      pos="fixed"
      top="15vh"
      left={{ base: "5%", lg: "calc(50% - 20rem)" }}
      w={{ base: "90%", lg: "40rem" }}
      bgColor="white"
      p="1rem"
      borderRadius="14px"
      boxShadow="0 2px 8px rgba(0,0,0, 0.25)"
      zIndex="30"
      overflow="auto"
      maxH="35rem"
    >
      {props.children}
    </Box>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
