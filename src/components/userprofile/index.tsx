import { Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";


type UserProfileProps = {
  userInfo: {
    nome: string,
    matricula: number,
    cpf: string,
    id_instituto: number,
  }
};

export default function UserProfile(props: UserProfileProps) {
  
  const userInfo = props.userInfo;
  const isProf = false

  function selecionarInstituto(id:number) {
    switch (id) {
      case 1:
        return 'Institute of Technology';
      case 2:
        return 'College of Engineering';
      case 3:
        return 'School of Business';
      case 4:
        return 'Faculty of Arts';
      case 5:
        return 'Department of Sciences';
      default:
        return 'Instituto não encontrado';
    }
  }

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
          <Text fontWeight="bold">{userInfo.nome}</Text>
          <Text>Matrícula: {userInfo.matricula}</Text>
          <Text>CPF: {userInfo.cpf}</Text>
          {isProf ? <Text>Professor do {userInfo.id_instituto}</Text> : <Text>Aluno do {selecionarInstituto(userInfo.id_instituto)}</Text>}


        </Flex>
      </Flex>

    </Flex>


   );
}
