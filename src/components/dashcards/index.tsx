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

type DashcardProps = {
  children: ReactNode;
};
  
export default function Dashcard(props: DashcardProps) {
    const { isOpen: isOpenX, onOpen: onOpenX, onClose: onCloseX } = useDisclosure()
    const { isOpen: isOpenY, onOpen: onOpenY, onClose: onCloseY } = useDisclosure()
    const handleModal = () => { onCloseX(); onOpenY() }
    const { children } = props;
    
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
              Lorem Ipsum sit dolor a met consectetur</Heading>
              <Text pt='2' fontSize='sm'>
                04/04/2023 até 06/06/2025
              </Text>
            </Box>
          </Stack>
          
        </CardBody>

        <Button onClick={onOpenX}>Open Modal</Button>
    
          <Modal isOpen={isOpenX} onClose={onCloseX}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Bolsa</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                    <b>Bolsa</b>
                    <p>khjfckhdefkhedfuefhiuasehfuiduifdsiugfsudigfiusgdfiu</p>

                    <b>Orientador</b>
                    <h4>Fulano de tal</h4>

                    <b>Inicio</b>
                    <h4>21/06/2023</h4>

                    <b>Fim</b>
                    <h4>21/06/2024</h4>

                </Text>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onCloseX}>
                  Fechar
                </Button>
                <Button variant='ghost' onClick={() => handleModal()}>Orientador</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {/* segundo modal */}

          <Modal isOpen={isOpenY} onClose={onCloseY}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Orientador</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <Flex gap={'20px'}>
                  <Img height={10} alt="userimage" src="./assets/userImage.png"></Img>
                    <Text>
                  
                    <b>FULANO DE TAL</b>
                        <br />
                        <b>Instituto</b>
                        <p>khjfckhdefkhedfuefhiua</p>
                        <b>Bolsa</b>
                        <h4>Fulano de tal</h4>
                        <b>Inicio</b>
                        <h4>21/06/2023</h4>
                        <b>Fim</b>
                        <h4>21/06/2024</h4>
                    </Text>
                </Flex>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onCloseY}>
                  Fechar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
      </Card>

    );
  }

