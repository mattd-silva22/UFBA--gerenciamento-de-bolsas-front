import {Button, Flex, Image, Text, Img} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

//Components import
import Navbar from '../components/navbar'
import SubMenuArea from '../components/submenuarea';
import InfocardsArea from '../components/infocardsarea';
import Infocards from '../components/infocards';
import StatisticsArea from '../components/statisticsarea';
import Statistics from '../components/statistics'
import FooterArea from '../components/footerarea';
import FooterComponents from '../components/footercomponents';

export default function Home() {

  const navigate = useNavigate();
  return (
    <Flex
    align={"center"}
    justify="center"
    flexDir={'column'}>
      <Navbar>
        <Button colorScheme='gray' color="#000" _hover={{color : "#fff"}} w="160px" variant='outline' onClick={()=>{navigate("/login")}}>Login</Button>
        <Button colorScheme='gray' bg="#0A2A9B" color="#fff" _hover={{color : "#000"}} w="160px" variant='outline' onClick={()=>{navigate("/cadastro")}}>Cadastro</Button>
      </Navbar>

      <SubMenuArea>
        <Img onClick={()=>{navigate("/")}} cursor={"pointer"} src="./assets/submenuicon.png" alt="Submenuicon"></Img>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Sobre</Text>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Editais</Text>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Orientadores</Text>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Graduação</Text>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Pós Graduação</Text>
        <Text onClick={()=>{navigate("/")}} cursor={"pointer"} fontWeight={"500"} fontSize="25px">Parceiros</Text>
      </SubMenuArea>

      <Image src="./assets/banner.png" alt="UFBA Entrada" w="100%" h="540px"  />

      <InfocardsArea>
        <Infocards> <p onClick={()=>{navigate("/")}}>Editais Graduação</p> </Infocards>
        <Infocards> <p onClick={()=>{navigate("/")}}>Editais Pós Graduação</p> </Infocards>
        <Infocards> <p onClick={()=>{navigate("/")}}>Sobre Bolsas</p> </Infocards>
        <Infocards> <p onClick={()=>{navigate("/")}}>Sobre Orientadores</p> </Infocards>
        <Infocards> <p onClick={()=>{navigate("/")}}>Categorias</p> </Infocards>
        <Infocards> <p onClick={()=>{navigate("/")}}>Orientações</p> </Infocards>
      </InfocardsArea>

      <StatisticsArea>

        <Statistics title="Bolsas Ativas" number="1000" img="./assets/books.png" altImage='Livros'></Statistics>
        <Statistics title="Alunos" number="1000" img="./assets/person.png" altImage='Pessoa'></Statistics>
        <Statistics title="Orientadores" number="1000" img="./assets/personfull.png" altImage='Pessoa'></Statistics>
        <Statistics title="Processos em Andamento" number="1000" img="./assets/docs.png" altImage='Documentos'></Statistics>

      </StatisticsArea>

      <FooterArea>


        <FooterComponents
          title={"REDES SOCIAIS"}
        >
          <Flex gap="20px" align={"center"}>
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Instagram" src="./assets/INSTAGRAM.png"></Img>
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Facebook" src="./assets/FACEBOOK.png"></Img>
            <Img onClick={()=>{navigate("/")}} cursor={"pointer"} boxSize={"40px"} alt="Twitter" src="./assets/TWITTER.png"></Img>
          </Flex>
        </FooterComponents>

        <FooterComponents
          title={"CONTATOS"}
        >
          <Flex gap="20px" align={"center"}>
            <Img boxSize={"50px"} alt="E-mail" src="./assets/EMAIL.png"></Img>
            <Text>example.org@ufba.br</Text>
          </Flex>

          <Flex gap="20px" align={"center"}>
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
          <Flex gap="20px" align={"center"}>
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
