import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    RadioGroup,
    Stack,
    Radio,
    useDisclosure,
    Placement,
} from '@chakra-ui/react';
import React, { useState, ReactNode } from "react";

type SidebarProps = {
    children: ReactNode;
};
  
    export default function Sidebar(props: SidebarProps) {
        const { children } = props;
        
        return (
        <>

        Menu

            <Drawer placement='left' isOpen={true} onClose={() => {}}>
                
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Consultar</DrawerHeader>
                <DrawerBody>
                    <p>Bolsas</p>
                    <p>Processos</p>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
         </>
        );
    }
  
  