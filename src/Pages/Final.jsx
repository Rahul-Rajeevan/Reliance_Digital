import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Final = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  return (
    <Box width="90%" margin="auto">
      <br />
      <Text fontSize="4xl" color="green">
        Order Successful!
      </Text>
      <Text>Items will be delivered within next 5 working days</Text>
      <Flex>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
      <br />
      <Box>
        {item.map((e) => (
          <div key={e.id}>
            <Box border="1px solid #bdbdbd">
              <Flex justifyContent="space-around" alignItems="center">
                <Image src={e.image} alt="no" width="200px" />
                <br />
                <Text
                  width="400px"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="sm"
                >
                  {e.name}
                </Text>

                <Text fontWeight="bold">₹ {e.price}</Text>

                <Text fontWeight="bold">Quantity: {e.qty}</Text>

                <Text fontWeight="bold">Total: {e.price * e.qty}</Text>
              </Flex>
            </Box>
            <br />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Final;
