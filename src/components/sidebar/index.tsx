import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type SidebarProps = {
    children: ReactNode;
};
  
    export default function Sidebar(props: SidebarProps) {
        const { children } = props;
        
        return (
            <Flex>
                <Flex
                    height="100%"
                    flexDir={"column"}
                    gap={"20px"}
                    boxShadow='md' p='6' rounded='md'
                    textAlign={"center"}
                >
                    <Text
                        marginTop={"75px"}
                        fontSize={"24px"}
                    >
                        Consultar
                    </Text>

                    <Button
                        width={"175px"}
                        height={"32px"}
                        borderRadius={"20px"}
                        bgColor={"#4198FF"}
                        color={"white"}
                        fontWeight={"700"}
                        >
                        Bolsas
                    </Button>
                    <Button
                        width={"175px"}
                        height={"32px"}
                        borderRadius={"20px"}
                        bgColor={"#4198FF"}
                        color={"white"}
                        fontWeight={"700"}
                        >
                        Processos
                    </Button>

                </Flex>
            </Flex>
        );
    }
  
  