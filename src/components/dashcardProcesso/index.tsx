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
  import { IProcesso } from '../../pages/Dashboard';
  import { converterData } from '../../utils/formatDate';
  
  type DashcardProps = {
    children: ReactNode;
    processo : IProcesso
  };
    
  export default function DashcardProcesso(props: DashcardProps) {
      const { isOpen: isOpenX, onOpen: onOpenX, onClose: onCloseX } = useDisclosure()
      const { isOpen: isOpenY, onOpen: onOpenY, onClose: onCloseY } = useDisclosure()
      const handleModal = () => { onCloseX(); onOpenY() }
      const { children , processo } = props;
      
      const initialRef = React.useRef(null)
      const finalRef = React.useRef(null)
      
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
                {processo.id}</Heading>
                <Text pt='2' fontSize='sm'>
                  04/04/2023 até 06/06/2025
                </Text>
              </Box>
            </Stack>
            </CardBody> 
        </Card>
  
      );
    }
  
  