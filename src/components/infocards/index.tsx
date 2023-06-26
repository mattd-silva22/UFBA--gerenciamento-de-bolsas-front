import { Center } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type BlueCardsProps = {
  children: ReactNode;
};

export default function BlueCards(props: BlueCardsProps) {

  const { children } = props;
  return (
    <Center 
    cursor="pointer" 
    textAlign={'center'} 
    h="90px" 
    w="320px" 
    padding={"90px 150px"} 
    bg="#8FC3FF" 
    borderRadius="10px" 
    fontWeight={"500"} 
    fontSize="35px">
      {children}
    </Center>
  );
}
