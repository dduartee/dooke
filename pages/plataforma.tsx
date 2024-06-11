import { Box, Image, Link } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
export function DookeSidebar() {
  return (
    <Box
      padding={"1rem"}
      bgColor={"#fff"}
      height={"100vh"}
      width={"200px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Image src={"/dookeEducation.png"} mb={"1rem"} />
      <Divider mb={"2rem"} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
          <Link mb={"1rem"}>Início</Link>
          <Link mb={"1rem"}>Turmas</Link>
          <Link mb={"1rem"}>Alunos</Link>
          <Link mb={"1rem"}>Professores</Link>
          <Link mb={"1rem"}>Mensagens</Link>
          <Link mb={"1rem"}>Notificações</Link>
          <Link mb={"1rem"}>Configurações</Link>
        </Box>
        <Link mb={"1rem"} href="/acesso">
          Sair
        </Link>
      </Box>
    </Box>
  );
}
// inicio: página amigável que mostra um overview das matérias de robotica e atividades com a porcentagem de conclusão
export function DookeContent() {
  return (
    <Box  bgColor={"#fff"} margin={"2rem"} width={"100%"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1rem"}
      >
        <Box>
          <h1>Olá, Fulano!</h1>
          <p>Seja bem-vindo ao Dooke Education</p>
        </Box>
    </Box>
    </Box>
    );
}
export default function Plataforma() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"row"}
      mb={"5rem"}
      height={"100vh"}
    >
      <DookeSidebar />
      <DookeContent />
    </Box>
  );
}
