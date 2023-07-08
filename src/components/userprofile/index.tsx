import { Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type UserProfileProps = {
  userInfo: {
    name: string,
    matricula: string,
    CPF: string,
    instituto: string,
    isProf: boolean,
  }
};

export default function UserProfile(props: UserProfileProps) {
  
  const userInfo = props.userInfo;

  return (

    <Flex
      width="100%"
      maxW="1920px"
      justify='center'
      align={"center"}
      padding={"20px"}
      boxShadow={"0px 10px rgba(0, 0, 0, 0.2)"}
    >

      <Flex
      gap={"20px"}
      >
        <img src="./assets/userImage.png" alt="Avatar" width="100px" height="100px" />
        <Flex flexDir={"column"}>
          <Text fontWeight="bold">{userInfo.name}</Text>
          <Text>Matrícula: {userInfo.matricula}</Text>
          <Text>CPF: {userInfo.CPF}</Text>
          {userInfo.isProf ? <Text>Professor do {userInfo.instituto}</Text> : <Text>Aluno do {userInfo.instituto}</Text>}


        </Flex>
      </Flex>

    </Flex>


   );
}
