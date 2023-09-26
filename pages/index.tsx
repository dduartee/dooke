import { Box, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import DookeHeader from '@/components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dooke Education</title>
        <meta name="description" content="Venha para a dooke!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DookeHeader />
      <Panorama />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mb={"5rem"}>
        <Heading fontSize={[25, 30]} textAlign={"center"} mb={"3rem"}>Por que Escolher a Dooke Education?</Heading>
        <Box display={"flex"} flexDirection={["column", "column", "column", "row"]} justifyContent={"space-evenly"} alignItems={"center"} width={"100%"}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Image src={"/img/snct/_GBP2378.jpg"} width={"90%"} maxWidth={"500px"} borderRadius={"20px"} boxShadow={"2xl"} mb={3} />
            <Image src={"/img/snct/_GBP3121.jpg"} width={"90%"} maxWidth={"500px"} borderRadius={"20px"} boxShadow={"2xl"} mb={3} />
          </Box>
          <Box maxWidth={"500px"} display={"flex"} alignItems={"center"} p={5} textAlign={'justify'}>
            <Text fontSize={["1.2rem", "1.5rem"]}>Nossa abordagem prática oferece a você a oportunidade de aprender fazendo, você aprende a programar e a construir robôs de verdade, com o apoio de uma equipe de especialistas em robótica e programação.</Text>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} flexDirection={"column"} mb={"5rem"}>
        <Heading fontSize={[25, 30]} textAlign={"center"} mb={"3rem"}>Desafios que Impulsionam o Aprendizado</Heading>
        <Box display={"flex"} flexDirection={["column", "column", "column", "row"]} justifyContent={"space-evenly"} alignItems={"center"} width={"100%"}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Image src={"/img/snct/_GBP2380.jpg"} width={"90%"} maxWidth={"500px"} borderRadius={"20px"} boxShadow={"2xl"} mb={3} />
            <Image src={"/img/snct/_GBP3134.jpg"} width={"90%"} maxWidth={"500px"} borderRadius={"20px"} boxShadow={"2xl"} mb={3} />
          </Box>
          <Box maxWidth={"500px"} p={5} textAlign={'justify'}>
            <Text fontSize={["1.1rem", "1.3rem"]}>Nós acreditamos que os desafios são oportunidades de aprendizado.</Text>
            <br />
            <Text fontSize={["1.1rem", "1.3rem"]}>Nossas competições de robótica são momentos emocionantes onde os estudantes testam suas habilidades e resolvem problemas do mundo real.</Text>
            <br />
            <Text fontSize={["1.1rem", "1.3rem"]}>Quando o trabalho em equipe e a resolução de desafios se encontram, o resultado é um aprendizado profundo e gratificante.</Text>
          </Box>
        </Box>
      </Box>
      <br />
      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} flexDirection={"column"} mb={"3rem"} id='about'>
        <Heading fontSize={[25, 30]} textAlign={"center"} >Sobre nós</Heading>
        <Box display={"flex"} flexDirection={["column", "column", "column", "row"]} justifyContent={"space-evenly"} alignItems={"center"} width={"100%"}>
          <Box maxWidth={"1000px"} display={"flex"} alignItems={"center"} p={5} textAlign={'justify'}>
            <Text fontSize={["1.1rem", "1.3rem"]}>Somos acadêmicos do Oeste de Santa Catarina, apaixonados por robótica e programação. Através da Dooke Education, buscamos capacitar jovens para enfrentar os desafios tecnológicos do futuro, proporcionando oportunidades práticas de aprendizado.</Text>
          </Box>
        </Box>
      </Box>
      <br />
      <DookeFooter />
    </>
  )
}
function Panorama() {
  return (
    <Box height={"100vh"} color={"#fff"} mt={3}>
      <Box
        position={"absolute"}
        display={"flex"} alignItems={"center"} flexDir={"column"} justifyContent={"center"}
        height="90vh" width="100%" padding={4}
      >
        <Heading textAlign={"center"} fontSize={[25, 30, 35]} backgroundColor={"brand.900"} padding={4} borderRadius={"10px"} maxHeight={"100px"}>
          Inicie a aventura com a Dooke!
        </Heading>
        <Box backgroundColor={"brand.900"} padding={4} minWidth="200px" maxWidth={"400px"} borderRadius={"10px"} marginTop={"40px"}>
          <Text fontSize={[20, 20, 25]} textAlign={"center"}>Preparando os estudantes do ensino médio para o futuro com experiências práticas em robótica e programação.</Text>
        </Box>
      </Box>
      <Box width={"100%"} height={"90vh"} overflow={"hidden"} backgroundImage={"/bg.svg"} maxWidth={"100vw"} />

    </Box>
  )
}

function DookeFooter() {
  const goTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Box backgroundColor={"#1e1e1e"} padding={2} display={"flex"} color={"#fff"} alignItems="center" justifyItems={"center"} flexDirection="column" textAlign={"center"}>
      <Image src={"/dookeEducation.png"} width={"100px"} height={"auto"} onClick={() => goTop()}/>
      {/* <Heading size={'md'} margin={3}>&copy; 2023</Heading> */}
    </Box>
  )
}
