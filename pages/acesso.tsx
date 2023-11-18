import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";

export default function Acesso() {
    const router = useRouter();
    return <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mb={"5rem"} height={"100vh"}>
         <Image src={"/dookeEducation.png"} width={"200px"} height={"auto"} mb={"1rem"} />
         <Box bgColor={"#fff"} padding={"2rem"} height={"300px"} width={"400px"} borderRadius={"20px"}
         display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box display={"flex"} width="100%" justifyContent={"flex-start"} mb={"2rem"}>
                <Heading fontSize={"2xl"} justifySelf={"left"}>Acesso</Heading>
            </Box>
            <Input placeholder={"Usuário"}  mb={"1rem"} borderColor={"#b3b3b3"}/>
            <Input type="password" minLength={6} placeholder={"Senha"} mb={"1rem"} borderColor={"#b3b3b3"}/>
            <Box display={"flex"} width="100%" justifyContent={"space-evenly"} mt={"1rem"}>
                <Button  color="brand.800" variant={'ghost'} _hover={{ bg: 'brand.50' }} onClick={() => router.push("/")}>Voltar</Button>
                <Button bgColor={"brand.500"} color="#fff" _hover={{ bg: 'brand.400' }} onClick={() => router.push("/plataforma")}>Entrar</Button>
            </Box>
        </Box>
    </Box>
}