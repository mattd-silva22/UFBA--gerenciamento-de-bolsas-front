import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type SubMenuAreaProps = {
  children: ReactNode;
};

export default function SubMenuArea(props: SubMenuAreaProps) {

  const { children } = props;
  return (

    <Flex
      width="90%"
      maxW="1920px"
      height={"80px"}
      justify='space-between'
      align={"center"}
      gap={"150px"}
      padding={"20px"}
      boxShadow={"0px 10px rgba(0, 0, 0, 0.2)"}
    >

      {children}

    </Flex>


   );
}
