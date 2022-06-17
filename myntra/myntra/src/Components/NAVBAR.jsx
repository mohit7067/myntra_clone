import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "../HomePageData/HomepageData";
import { useNavigate } from "react-router-dom";
export function NAVBAR() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const HandleNavigation = () => {
    navigate("/cart");
  };

  return (
    <Box>
      <Box
        position={"fixed"}
        w="100%"
        marginBottom={"20px"}
        bg="white"
        p="0.6rem"
        borderBottom={"1px solid"}
      >
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
            >
              <Link to="/">
                <Image
                  w="40px"
                  h="33px"
                  src={Logo.logo}
                  alt="myntra-logo"
                ></Image>
              </Link>
            </Text>

            <Flex
              display={{ base: "none", md: "flex" }}
              gap="2rem"
              ml={10}
              fontWeight="500"
            >
              <Link to="/">Home</Link>
              <Link to="/men">MEN</Link>
              <Link to="/women">WOMEN</Link>
              <Link to="/kids">KIDS</Link>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              fontSize={"1xl"}
              fontWeight={"bold"}
              color="red"
              border="1px solid"
              p="4px"
              justifyContent={"center"}
              onClick={HandleNavigation}
            >
              <BsHandbag />
              bag
            </Button>
            <Button
              fontWeight={"bold"}
              textAlign={"center"}
              fontSize={"1xl"}
              color="red"
              border="1px solid"
              p="4px"
              justifyContent={"center"}
            >
              <CgProfile />
              profile
            </Button>

            {/* <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button> */}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          {/* <MobileNav /> */}
        </Collapse>
      </Box>
    </Box>
  );
}
