import { Flex, Image, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  children: ReactNode;
};

export default function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  const { children } = props;
  return (
    <Flex
      width="100%"
      background="var(--lightblue, #4198FF)"
      alignItems={"center"}
      justifyContent="center"
      fontSize={"20px"}
      fontWeight="600"
      lineHeight="150.023%"
    >
      <Flex
        width={"90%"}
        maxW="1920px"
        p="12px"
        // border="1px solid red"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex
          alignItems={"center"}
          justifyContent="space-between"
          gap={"24px"}
          textTransform="uppercase"
          // border="1px solid red"
        >
          <Image cursor="pointer" onClick={()=>{navigate("/")}} src="./assets/brasao.png" />
          <Text color={"#fff"}>
            UFBA <br /> Sistema de gestão de bolsas
          </Text>
        </Flex>

        <Flex gap={"24px"}>{children}</Flex>
      </Flex>
    </Flex>
  );
}
