import { Button, Flex, Img, Input, InputGroup, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [userPassword,setUserPassword] = useState<string>("")
  const [userLogin,setUserLogin] = useState<string>("")

  const handleLogin = (userLogin:string)=>{
    navigate(`/dashboard?userId=${userLogin}`)
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
            <Input placeholder='Matricula' size='lg' value={userLogin}  onChange={(e)=> setUserLogin(e.target.value)}/>
            <Input placeholder='Senha' size='lg' type="password" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>
            <Button colorScheme='blue' size='lg' onClick={()=>{handleLogin(userLogin)}}>Login</Button>

            <Text cursor='pointer' color='blue' size='md' onClick={()=>{navigate("/cadastro")}}>Ainda não tem uma conta? Clique aqui para se cadastrar</Text>

          </InputGroup>
        </Flex>
    </Flex>
  )
}



