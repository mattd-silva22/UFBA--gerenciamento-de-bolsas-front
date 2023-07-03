import { Button, Flex, Text, Img, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

//Components import
import React from 'react'
import { redirect } from 'react-router-dom'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import FooterArea from '../components/footerarea';
import FooterComponents from '../components/footercomponents';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Navbar>
        <Button colorScheme="gray" color="#fff" background="#0A2A9B" _hover={{ color: "#4198FF" }} w="160px" variant="outline" onClick={() => { redirect("/login") }}>Sair</Button>
      </Navbar>

      <Flex flex="1" position="relative">
        <Flex
          width="100%"
          direction="column"
          justify="center"
          align="center"
        >
          <Flex flexDir={'column'}>
          <Text fontWeight={700} fontSize="25px">
            <h1>Bolsas</h1>
          </Text>
          </Flex>
          <Flex flexDir={'column'}>
          <Text fontWeight={700} fontSize="25px">
            <h1>Processos</h1>
          </Text>
          </Flex>

          <Flex
            width="150px"
            height="200px"
            justify="center"
            align="center"
          >
            oi
          </Flex>
        </Flex>

        {/* <Sidebar>
        <Button colorScheme="gray" color="#fff" background="#0A2A9B" _hover={{ color: "#4198FF" }} w="160px" variant="outline" onClick={() => { redirect("/login") }}>Processos</Button>
        </Sidebar> */}
      </Flex>

        {/* Footer */}

        <FooterArea>


        <FooterComponents
          title={"REDES SOCIAIS"}
        >
          <Flex gap="20px">
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Instagram" src="./assets/INSTAGRAM.png"></Img>
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Facebook" src="./assets/FACEBOOK.png"></Img>
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Twitter" src="./assets/TWITTER.png"></Img>
          </Flex>
        </FooterComponents>

        <FooterComponents
          title={"CONTATOS"}
        >
          <Flex gap="20px">
            <Img boxSize={"50px"} alt="E-mail" src="./assets/EMAIL.png"></Img>
            <Text>example.org@ufba.br</Text>
          </Flex>

          <Flex gap="20px">
            <Img boxSize={"40px"} alt="Phone" src="./assets/PHONE.png"></Img>
              <Flex
                flexDir={"column"}
              >
                <Text>(xx) xxxx-xxxx</Text>
                <Text>(xx) xxxx-xxxx</Text>
                <Text>(xx) xxxx-xxxx</Text>
              </Flex>
          </Flex>
          
        </FooterComponents>

        <FooterComponents
          title={"ENDEREÇO"}
        >
          <Flex gap="20px">
            <Img boxSize={"40px 50px"} alt="Location" src="./assets/LOCATION.png"></Img>
              <Flex
                flexDir={"column"}
              >
                <Text>Rua Augusto Viana, s/n - Palácio da Reitoria</Text>
                <Text fontWeight={"bold"}>Canela, Salvador - CEP: 40110-909</Text>
              </Flex>
          </Flex>
          
        </FooterComponents>

      </FooterArea>

    </Flex>

    

    
  )
}
