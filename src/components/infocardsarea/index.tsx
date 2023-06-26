import { Wrap } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type InfocardsAreaProps = {
  children: ReactNode;
};

export default function InfocardsArea(props: InfocardsAreaProps) {

  const { children } = props;
  return (
    <Wrap
      width="80%"
      maxW="1920px"
      margin={"100px 0px"}
      justify='center'
      spacing={"60px"}
    >

    {children}

    </Wrap>
  );
}
