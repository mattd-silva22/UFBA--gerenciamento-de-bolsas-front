import { Flex, Text, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type FooterProps = {
  title: String;
  children: ReactNode
};

export default function Footer(props: FooterProps) {

  const { title, children } = props;
  return (

    <Flex
      flexDir={'column'}
      color={"white"}
      font-size="28px"
      gap={"10px"}
    >

      <Flex
        marginLeft="-15px"
      >

        <Box 
          borderLeft={"5px solid #4198FF"}
          width={"5px"}
        >
        </Box>

        <Text
          marginLeft="10px"
        >
          {title}
        </Text>

      </Flex>
      

      {children}

    </Flex>


   );
}
