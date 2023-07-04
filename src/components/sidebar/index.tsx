import { Button, Flex, Text } from "@chakra-ui/react";

type SidebarProps = {
    isProf: boolean;
};
  
    export default function Sidebar(props: SidebarProps) {
        const { isProf } = props;
        
        if (isProf) {
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
        else {
            return <></>
        }
  
    }