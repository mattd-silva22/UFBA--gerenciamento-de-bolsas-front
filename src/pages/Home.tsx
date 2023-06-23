import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'
import Infocards from '../components/infocards';

export default function Home() {

  const navigate = useNavigate();
  return (
    <Flex
    align={"center"}
    justify="center"
    flexDir={'column'}>
      <Navbar>
        <Button colorScheme='gray' color="#fff" _hover={{color : "#000"}} w="160px" variant='outline' onClick={()=>{navigate("/login")}}>Login</Button>
      </Navbar>
      <Image src="./assets/banner.png" alt="UFBA Entrada" w="100vw" h="65vh"  />
      
      <Infocards>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
        <Center onClick={()=>{navigate("/")}} textAlign={'center'} h="110px" w="360px" padding={"110px 180px"} bg="#8FC3FF" borderRadius="10px" fontWeight={"500"} fontSize="40px">Editais Graduação</Center>
      </Infocards>


    </Flex>
  )
}
