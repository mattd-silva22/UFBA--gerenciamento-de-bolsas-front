import {Button, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'
import InfocardsArea from '../components/infocardsarea';
import BlueCards from '../components/bluecards';

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
      <Image src="./assets/banner.png" alt="UFBA Entrada" w="100%" h="540px"  />
      
      <InfocardsArea>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Editais Graduação</p> </BlueCards>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Editais Pós Graduação</p> </BlueCards>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Sobre Bolsas</p> </BlueCards>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Sobre Orientadores</p> </BlueCards>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Categorias</p> </BlueCards>
        <BlueCards> <p onClick={()=>{navigate("/")}}>Orientações</p> </BlueCards>
      </InfocardsArea>


    </Flex>
  )
}
