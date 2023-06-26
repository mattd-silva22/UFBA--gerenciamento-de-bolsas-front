import { Wrap, Text, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type StatisticsAreaProps = {
  children: ReactNode;
};

export default function StatisticsArea(props: StatisticsAreaProps) {

  const { children } = props;
  return (

    <Flex
      width="100%"
      maxW="1920px"
      justify='center'
      align={"center"}
      flexDir={'column'}
    >

      <Text
        fontSize={"70px"}
        fontWeight="600"
      >
        Estatísticas
      </Text>

      <Wrap
        width="80%"
        maxW="1920px"
        justify='center'
        gap={"62px"}
      >
        {children}
      </Wrap>

    </Flex>


   );
}
