import { Flex, Input, Text } from "@chakra-ui/react";

const InputI = (props) => {
  return (
    <Flex display="flex" alignItems="center" mb="0.5rem">
      <Text fontWeight="bold" mr="1rem">
        {props.label}
      </Text>
      <Input
        {...props.input}
        size="sm"
        w="3rem"
        borderRadius="5px"
        border="1px solid #ccc"
        fontStyle="inherit"
        pl="0.5rem"
      />
    </Flex>
  );
};

export default InputI;
