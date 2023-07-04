import { Box, Heading, Text, Stack, StackDivider, Card, CardHeader, CardBody } from '@chakra-ui/react';

import React, { ReactNode } from "react";

type DashcardProps = {
  children: ReactNode;
};
  
export default function Dashcard(props: DashcardProps) {
    const { children } = props;
    
    return (
      <Card
        width={"400px"}
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
      </Card>

    );
  }

