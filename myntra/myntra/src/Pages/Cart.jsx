import React, { useEffect } from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/Cart/action";
export const Cart = () => {
  const cart = useSelector((store) => store.CartData.cart);
  console.log(cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  return (
    <Box>
      <Box>
        <Box w="100%" h="120px"></Box>
        {cart.map((product) => (
          <Box>
            <Box
              w="600px"
              margin={"auto"}
              border="1px solid red"
              h="250px"
              display={"flex"}
              marginBottom="2rem"
            >
              <Box w="50%">
                <Image
                  fit={"contain"}
                  h="100%"
                  w="100%"
                  src={product.image_url}
                />
              </Box>
              <Box w={"50%"}>
                <Heading>{product.name}</Heading>
                <Text>price : {product.price}</Text>
                <Text>color: {product.color}</Text>
                <Text>Brand :{product.Brand}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
