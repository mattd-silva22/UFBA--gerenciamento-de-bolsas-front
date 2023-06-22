import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { redirect } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Dashboard() {
  return (
    <Flex
    align={"center"}
    justifyContent="center"
    flexDir={'column'}>
      <Navbar>
        <Button colorScheme='gray' color="#fff" _hover={{color : "#000"}} w="160px" variant='outline' onClick={()=>{redirect("/login")}} >Login</Button>
      </Navbar>
        <Text>
            Oi aqui é a dashboard page
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
