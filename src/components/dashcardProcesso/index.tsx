import { Box, Heading, Text, Stack, StackDivider, Card, CardHeader, CardBody, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Img,
    Flex } from '@chakra-ui/react';
  
  import React, { ReactNode } from "react";
  import { IBolsa, IProcesso } from '../../pages/Dashboard';
  import { converterData } from '../../utils/formatDate';
  
  type DashcardProps = {
    processo : IProcesso
    bolsaList : IBolsa[]
  };
    
  export default function DashcardProcesso(props: DashcardProps) {
      const { isOpen: isOpenX, onOpen: onOpenX, onClose: onCloseX } = useDisclosure()
      const { isOpen: isOpenY, onOpen: onOpenY, onClose: onCloseY } = useDisclosure()
      const handleModal = () => { onCloseX(); onOpenY() }
      const {  processo,bolsaList } = props;
      
      const initialRef = React.useRef(null)
      const finalRef = React.useRef(null)
      const name = bolsaList.find(item => item.id === processo.id_bolsa)
      return (
        <Card
          width={"400px"}
          onClick={onOpenX}
          cursor={'pointer'}
        >
          <CardBody>
            <Stack spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                {name? name.nome : ""}</Heading>
                <Text pt='2' fontSize='sm'>
                {converterData(processo.data_inicio)} até {converterData(processo.data_inicio)}
                </Text>
              </Box>
            </Stack>
            </CardBody> 
        </Card>
  
      );
    }
  
  