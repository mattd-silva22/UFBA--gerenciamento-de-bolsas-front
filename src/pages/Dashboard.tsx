import { Button, Flex, Text, Img } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import api from "../service/api";
//Components import
import React, { useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import UserProfile from '../components/userprofile'
import FooterArea from '../components/footerarea';
import FooterComponents from '../components/footercomponents';
import Dashcard from '../components/dashcards';
import DashcardProcesso from '../components/dashcardProcesso';

export interface IBolsa {
  id: number;
  nome: string;
  remuneracao: number;
  quantidade_total: number;
  quantidade_restante: number;
  data_inicio: string;
  data_fim: string;
}

export interface IProcesso {
  id: number;
  data_inicio: string;
  data_fim: string;
  ativo: boolean;
  id_bolsa: number;
}

export interface IDadosAluno {
  matricula: number;
  cpf: string;
  nome: string;
  id_instituto: number;
}
export default function Dashboard() {
  const navigate = useNavigate();
  const [bolsasList,setBolsasList] = useState<IBolsa[]>([])
  const [processoList,setProcessoList] = useState<IProcesso[]>([])
  const [userLoginList, setUserLoginList] = useState<IDadosAluno[]>([])
  const [userInfo, setUserInfo] = useState<IDadosAluno>({
    nome : "Fulano da Silva",
    cpf :  "00012365478",
    matricula : 12345,
    id_instituto : 1,
  })

  useEffect(()=>{
    handleLoad()
  },[])
  const searchParams = new URLSearchParams(document.location.search)
  const handleLoad = ()=>{
    api.get("grupo-bolsa").then(res =>{
      const bolsasTemp = res.data
      setBolsasList(bolsasTemp)
    }).catch(err =>{
      console.log(err)
    })

    api.get("processo-seletivo/getAll").then(res=>{
      setProcessoList(res.data)

    }).catch(err =>{
      console.log(err)
    })

    api.get("/aluno").then(res =>{
      const data = res.data as IDadosAluno[]
      setUserLoginList(data)
      const currentUser = data.find(item => item.matricula.toString() === searchParams.get("userId") )
      if(currentUser){
        setUserInfo(currentUser)
      }
      
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <Flex flexDirection="column">
      <Navbar>
        <Button colorScheme="gray" color="#fff" background="#0A2A9B" _hover={{ color: "#4198FF" }} w="160px" variant="outline" onClick={() => { navigate("/login") }}>Sair</Button>
      </Navbar>

      <Flex>
        <Sidebar isProf={true} ></Sidebar>
        
        <Flex 
        flexDir='column'
        width="100%"
        >

          <UserProfile userInfo={userInfo}></UserProfile>
          <Text>{searchParams.get("userId")}</Text>
          <Flex
            width={"315px"}
            flexDir={"row"}
            marginLeft={"120px"}
            marginTop={"60px"}
            marginBottom="60px"
            gap={"300px"}
            justifyContent={"left"}
          >
            <Flex 
            flexDir={'column'}
            gap={5}
            >
              <Text fontWeight={700} fontSize="25px">
                <h1>Bolsas</h1>
              </Text>
            {bolsasList? bolsasList.map(item =>{
              return (
                <Dashcard bolsa={item}>Teste</Dashcard>
              )
              
            }) : ""}
           

            </Flex>

            <Flex 
            flexDir={'column'}
            gap={5}
            >
              <Text fontWeight={700} fontSize="25px">
                <h1>Processos</h1>
              </Text>

            {processoList? processoList.map(item =>{
              return (
                <DashcardProcesso processo={item} bolsaList={bolsasList}/>
              )
            }) : ""}

           



            </Flex>
          </Flex>
        </Flex>

        
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
function useRouter() {
  throw new Error('Function not implemented.');
}

