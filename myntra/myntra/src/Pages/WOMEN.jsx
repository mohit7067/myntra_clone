import React, { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  Heading,
  Button,
  Checkbox,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react";

import { useSearchParams } from "react-router-dom";
import { fetchWomenData } from "../Redux/women/action";
import { DomWomen } from "../Components/DomWomen";

export const WOMEN = () => {
  const WomensData = useSelector((store) => store.WomensData.women);
  const loading = useSelector((store) => store.WomensData.loading);
  let [searchParams, setSearchParams] = useSearchParams();
  const [mensClothingValue, setMensClothingValue] = useState(
    searchParams.getAll("category") || []
  );
  const [discount, setDiscount] = useState(searchParams.getAll("off") || []);
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const mensClothingHandler = (value) => {
    setMensClothingValue(value);
  };
  const HandleDiscount = (value) => {
    setDiscount(value);
  };
  const HandleBrand = (value) => {
    setBrand(value);
  };

  useEffect(() => {
    if (mensClothingValue && page && discount && brand) {
      setSearchParams({
        page: page,
        category: mensClothingValue,
        off: discount,
        brand: brand,
      });
    }
    let params = {
      category: searchParams.getAll("category"),
      page: page,
      off: searchParams.getAll("off"),
      brand: searchParams.getAll("brand"),
    };

    dispatch(fetchWomenData(params));
  }, [
    setSearchParams,
    dispatch,
    page,
    mensClothingValue,
    searchParams,
    discount,
    brand,
  ]);

  return (
    <Box>
      <Box w="100%" h="80px"></Box>
      <Box display={"flex"} justifyContent="center" marginTop={"50px"}>
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign="center"
          />
        )}
      </Box>

      <Box marginTop="-50px">
        <Heading as={"h2"} size="md" marginBottom={"3px"} bg="gray.200">
          Filters
        </Heading>
        <Box
          w={{ lg: "100%", md: "100%", sm: "100%" }}
          display="flex"
          gap={"40px"}
          bg="gray.200"
          p="1rem"
        >
          <Box marginBottom={"15px"}>
            <Heading as="h4" size="sm" color={"red"}>
              Women's Clothing
            </Heading>
            <Box>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={mensClothingValue}
                onChange={mensClothingHandler}
              >
                <VStack alignItems={"baseline"}>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="dress"
                  >
                    Dress
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="Jumpsuit"
                  >
                    Jumpsuit
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="top"
                  >
                    Top
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="bottom"
                  >
                    Bottom
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="jacket"
                  >
                    Jackets
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="skirt"
                  >
                    Skirt
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          </Box>

          <Box marginBottom={"15px"}>
            <Heading as="h4" size="1xl" color={"red"}>
              Filter product by discount
            </Heading>
            <Box>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={discount}
                onChange={HandleDiscount}
              >
                <VStack alignItems={"baseline"}>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="30"
                  >
                    below 30 %off
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="50"
                  >
                    below 50 %off
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="70"
                  >
                    below 70 %off
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="90"
                  >
                    below 90 %off
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          </Box>
          <Box marginBottom={"15px"}>
            <Heading as="h4" size="1xl" color={"red"}>
              Filter Product by Brand
            </Heading>
            <Box>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={brand}
                onChange={HandleBrand}
              >
                <VStack alignItems={"baseline"}>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="SKIMS"
                  >
                    SKIMS
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="Billabong"
                  >
                    BILLABONG
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="Dress the Population"
                  >
                    DRESS THE POPULATION
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="BP"
                  >
                    BP
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="ASTR the Label"
                  >
                    ASTR THE LABEL
                  </Checkbox>
                  <Checkbox
                    bg="darkgrey"
                    borderRadius={"10px"}
                    p="0 1rem 0"
                    value="Bernardo"
                  >
                    BERNARDO
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          </Box>
          <Box>
            <Heading as="h4" size="1xl" color={"red"}>
              Sort by Price
              {"   "}
            </Heading>
            <select
              style={{
                backgroundColor: "darkgrey",
                borderRadius: "10px",
                padding: "0 1rem 0",
              }}
            >
              <option default value="">
                Sort by price
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(2,3fr)",
            sm: "repeat(1,1fr)",
          }}
          marginTop="-35px"
        >
          {WomensData.map((product) => (
            <DomWomen key={product.id} product={product} />
          ))}
        </Box>
      </Box>
      <Box display={"flex"} justifyContent="center" borderTop="1px solid grey">
        <Box display={"flex"} gap="30px" p="1rem">
          <Button disabled={page === 1} onClick={handlePrevPage} bg="teal">
            Prev-Page
          </Button>
          <Button onClick={handleNextPage} bg="teal">
            Next-Page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
