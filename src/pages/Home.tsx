import {Button, Flex, Image, Text, Img} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

//Components import
import Navbar from '../components/navbar'
import SubMenuArea from '../components/submenuarea';
import InfocardsArea from '../components/infocardsarea';
import Infocards from '../components/infocards';
import StatisticsArea from '../components/statisticsarea';
import Statistics from '../components/statistics'

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


    </Flex>
  )
}
