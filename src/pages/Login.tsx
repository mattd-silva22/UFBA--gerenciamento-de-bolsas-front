import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'

export default function Login() {
  const navigate = useNavigate();

  return (
    <Flex
    align={"center"}
    justifyContent="center"
    flexDir={'column'}>
      <Navbar>
        <Button colorScheme='gray' color="#fff" _hover={{color : "#000"}} w="160px" variant='outline' onClick={()=>{navigate("/home")}}>Login</Button>
      </Navbar>
        <Text>
            Oi aqui é a login page
        </Text>

        <Flex
          width={"150px"}
          height={"200px"}
        >
          oi
        </Flex>
    </Flex>
  )
}
function useHistory() {
  throw new Error('Function not implemented.');
}

