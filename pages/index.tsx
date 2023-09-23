import NextLink from 'next/link'
import { Box, Container, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text, calc } from '@chakra-ui/react'
import Head from 'next/head'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { AtSignIcon, EditIcon, HamburgerIcon, InfoOutlineIcon } from '@chakra-ui/icons'
export default function Home() {
  return (
    <>
      <Head>
        <title>Dooke</title>
        <meta name="description" content="Venha para a dooke!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DookeHeader />
      <Panorama />
      <DookeFooter />
    </>
  )
}
function Panorama() {
  return (
    <Box height={"100vh"}>
      <Box
        position={"absolute"}
        display={"flex"} alignItems={"center"} flexDir={"column"}
        height="350px" width="100%" padding={4}
      >
        <Heading textAlign={"center"} fontSize={[25, 30, 35]} backgroundColor={"#1e1e1e"} padding={4} borderRadius={"10px"} maxHeight={"100px"} marginTop={"100px"}>
          Inicie a aventura com a Dooke!
        </Heading>
        <Box backgroundColor={"#1e1e1e"} padding={4} minWidth="200px" maxWidth={"400px"} borderRadius={"10px"} marginTop={"40px"}>
          <Text fontSize={[20, 20, 25]} textAlign={"center"}>Preparando os estudantes do ensino médio para o futuro com experiências práticas em robótica e programação.</Text>
        </Box>
      </Box>
      <Box width={"100%"} height={"560px"} overflow={"hidden"} backgroundImage={"/bg.svg"} maxWidth={"1440px"}>
      </Box>

    </Box>
  )
}
function DookeHeader() {
  return (
    <Box height={"60px"} backgroundColor={"#1e1e1e"} padding={2} display={"flex"} color={"#fff"} justifyContent={"space-around"} alignItems={"center"}>
      <Heading size={'xl'}>Dooke</Heading>
      <Box display={["none", "flex"]} justifyContent={"space-around"} alignItems={"center"} width={"300px"}>
        <Link as={NextLink} href='/'>
          <Text>Home</Text>
        </Link>
        <Link as={NextLink} href='/blog'>
          <Text>Blog</Text>
        </Link>
        <Link as={NextLink} href='/sobre'>
          <Text>Sobre nós</Text>
        </Link>
      </Box>
    </Box>
  )
}

function DookeFooter() {
  // make an footer
  return (
    <Box backgroundColor={"#1e1e1e"} padding={2} display={"flex"} color={"#fff"} alignItems="center" justifyItems={"center"} flexDirection="column">
      <Heading size={'sm'} margin={3}>&copy; 2023 Dooke</Heading>
    </Box>
  )
}
