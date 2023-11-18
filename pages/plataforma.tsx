import { Box, Image, Link } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
export function DookeSidebar() {
    return (
        <Box position={"fixed"} left={0} top={0} padding={"2rem"} bgColor={"#fff"} height={"100vh"} width={"200px"}
            display={"flex"} flexDirection={"column"}>
            <Image src={"/dookeEducation.png"} mb={"1rem"} />
            <Divider mb={"2rem"} />
            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} height={"100%"}>
                <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
                    <Link mb={"1rem"}>Dashboard</Link>
                    <Link mb={"1rem"}>Turmas</Link>
                    <Link mb={"1rem"}>Alunos</Link>
                    <Link mb={"1rem"}>Professores</Link>
                    <Link mb={"1rem"}>Mensagens</Link>
                    <Link mb={"1rem"}>Notificações</Link>
                    <Link mb={"1rem"}>Configurações</Link>
                </Box>
                <Link mb={"1rem"} href="/acesso">Sair</Link>
            </Box>
        </Box>
    )
}

export default function Plataforma() {
    return <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mb={"5rem"} height={"100vh"}>
        <DookeSidebar />
    </Box>
}