import { Flex, Img, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type FooterAreaProps = {
  children: ReactNode;
};

export default function FooterArea(props: FooterAreaProps) {

  const { children } = props;
  return (

    <Flex
      width="100%"
      height="375px"
      bg={"#1744B3"}
      align={"center"}
      justify="center"
      flexDir={'column'}
      padding={"30px"}
      gap={"20px"}

    >

      <Flex
        width="90%"
        maxW="1920px"
        align={"center"}
        flexDir={'row'}
      >

        <Img src="./assets/footerlogo.png" alt="UFBA Logo"></Img>

        <Flex
          w="1920px"
          padding={"20px"}
          align={"flex-start"}
          justify='space-around'
          // gap={"50px"}
        >

          {children}

        </Flex>


      </Flex>

      <Text color={"white"}>© 2023 Universidade Federal da Bahia. Todos os direitos reservados</Text>

    </Flex>


   );
}
