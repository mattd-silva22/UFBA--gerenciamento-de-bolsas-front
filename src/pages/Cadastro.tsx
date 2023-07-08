import { Button, Flex, Img, Input, InputGroup, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();
  const [userFullName,setUserFullName] = useState<string>("")
  const [userPassword,setUserPassword] = useState<string>("")
  const [userCPF,setUserCPF] = useState<string>("")
  const [matricula,setMatricula] = useState<string>("")

  const handleCadastro = ()=>{
    navigate("/login")
  }
  return (
    <Flex
    w="100%"
    h="100vh"
    >
        
        <Flex
          w="45%"
          bg="linear-gradient(317deg, #72C4FF 7.29%, #ACD4F1 26.04%, #4198FF 100%)"
          align={"center"}
          justify={"center"}
        >
          <Img cursor="pointer" onClick={()=>{navigate("/")}} src="./assets/brasao-login.png"  w="354px" h="464px"/>
        </Flex>

        <Flex
          w="55%"
          alignItems={"center"}
          justify={"center"}
          flexDir="column"
          gap={"60px"}
        >
          <Text fontSize={"4xl"} fontWeight="bold">Gerenciamento de Bolsas UFBA</Text>
          <InputGroup
            flexDir="column"
            maxWidth={"60%"}
            gap="36px"
          >
            <Input placeholder='Nome Completo' type="name" size='lg' value={userFullName}  onChange={(e)=> setUserFullName(e.target.value)}/>
            <Input placeholder='Senha' size='lg' type="password" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>
            <Input placeholder='CPF' size='lg' type="cpf" value={userCPF} onChange={(e)=> setUserCPF(e.target.value)}/>
            <Input placeholder='Matrícula' size='lg' type="matricula" value={matricula} onChange={(e)=> setMatricula(e.target.value)}/>
            <Select size="lg">
              <option value='aluno'>Aluno</option>
              <option value='professor'>Professor</option>
            </Select>
            <Select size="lg">
              <option value='i1'>Institute of Technology</option>
              <option value='i2'>College of Engineering</option>
              <option value='i3'>School of Business</option>
              <option value='i4'>Faculty of Arts</option>
              <option value='i5'>Department of Sciences</option>
            </Select>
            <Button colorScheme='blue' size='lg' onClick={()=>{handleCadastro()}}>Cadastrar</Button>


          
            <Text cursor='pointer' color='blue' size='md' onClick={()=>{navigate("/login")}}>Já tem uma conta? Clique aqui para fazer login</Text>
          
          </InputGroup>
        </Flex>
    </Flex>
  )
}


