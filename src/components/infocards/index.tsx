import { Center, Flex, Image, Text, Wrap } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type InfocardsProps = {
  children: ReactNode;
};

export default function Infocards(props: InfocardsProps) {

  const { children } = props;
  return (
    <Wrap
      width="80vw"
      margin={"100px 0px"}
      justify='center'
      spacing={"60px"}
    >

    {children}

    </Wrap>
  );
}
