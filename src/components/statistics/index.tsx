import { Text, Img, Flex } from "@chakra-ui/react";

type StatisticsProps = {
  title: string;
  img: string;
  altImage: string;
  number: string;
};

export default function Statistics(props: StatisticsProps) {

  const { title, img, altImage, number } = props;
  return (
    <Flex
    flexDir={'column'}
    textAlign={'center'}
    justify={'center'} 
    margin={"40px 0px"}
    h="400px" 
    w="300px" 
    fontWeight={"500"} 
    fontSize="40px">
      <Text>{title}</Text>
      <Img margin={"auto"} src={img} alt={altImage} boxSize={"165px"}></Img>
      <Text>{number}</Text>
    </Flex>
  );
}
