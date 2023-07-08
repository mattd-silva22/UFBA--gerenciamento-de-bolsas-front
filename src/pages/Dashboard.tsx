import { Button, Flex, Text, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
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
export default function Dashboard() {
  const navigate = useNavigate();
  const [bolsasList,setBolsasList] = useState<IBolsa[]>([])
  const [processoList,setProcessoList] = useState<IProcesso[]>([])
  const [userInfo, setUserInfo] = useState({
    // Isso aqui vai vir da requisição do backend, provavelmente por um useEffect assim que o componente faz o load inicial
    // Pode até deixar isso aqui como default e fazer a requisição com o setUserInfo
    name: "Nome Completo do Usuário",
    matricula: "000000000",
    CPF: "000.000.000-00",
    instituto: "Matemática e Estatística",
    userImage: "./assets/userImage.png",
    isProf: true,
  })

  useEffect(()=>{
    handleLoad()
  },[])

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
  }

  return (
    <Flex flexDirection="column">
      <Navbar>
        <Button colorScheme="gray" color="#fff" background="#0A2A9B" _hover={{ color: "#4198FF" }} w="160px" variant="outline" onClick={() => { navigate("/login") }}>Sair</Button>
      </Navbar>

      <Flex>
        <Sidebar isProf={userInfo.isProf} ></Sidebar>
        
        <Flex 
        flexDir='column'
        width="100%"
        >

          <UserProfile userInfo={userInfo}></UserProfile>
          
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
