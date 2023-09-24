import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { HeaderMenu } from "./Menu";

export default function DookeHeader() {
  return (
    <Box height={"70px"} bg={"brand.500"} padding={3} display={"flex"} color={"#fff"} justifyContent={"space-around"} alignItems={"center"}>
      {/* <Heading size={'xl'}>Dooke</Heading> */}
      <Image src={"/logo.png"} height={"50px"} />
      <Box display={["none", "flex"]} justifyContent={"space-around"} alignItems={"center"} width={"300px"}>
        <Link as={NextLink} href='/'>
          <Text fontSize={"1.4rem"}>Home</Text>
        </Link>
        <Link as={NextLink} href='/blog'>
          <Text fontSize={"1.4rem"}>Blog</Text>
        </Link>
        <Link as={NextLink} href='/about'>
          <Text fontSize={"1.4rem"}>Sobre nós</Text>
        </Link>
      </Box>
      <Box display={["flex", "none"]} position={"absolute"} right={0} mr={10} >
        <HeaderMenu />
      </Box>
    </Box>
  )
}