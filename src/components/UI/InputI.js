import React from "react";

import { Flex, FormLabel, Input } from "@chakra-ui/react";

const InputI = React.forwardRef((props, ref) => {
  return (
    <Flex display="flex" alignItems="center" mb="0.5rem">
      <FormLabel htmlFor={props.input.id} fontWeight="bold" mr="1rem">
        {props.label}
      </FormLabel>
      <Input
        ref={ref}
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
});

export default InputI;
