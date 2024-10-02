import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, InfoIcon, DownloadIcon, LockIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

export function HeaderMenu() {
    const [showDooke, setShowDooke] = React.useState(false);
    const handleToggle = () => {
        setShowDooke(!showDooke);
    }
    return (
        <Menu onOpen={() => setShowDooke(true)} onClose={()=> setShowDooke(false)}>
            <MenuButton aria-label='Options' transition='all 0.2s'>
                {
                    showDooke ?
                        <Image src={"/dooke.png"} height={"50px"} border={2} />
                        :
                        <Image src={"/apenasodooke.png"} height={"50px"} border={2} />
                }
            </MenuButton>
            <MenuList color={"#000"}>
                <MenuItem icon={<DownloadIcon />} as='a' href='/'>
                    Home
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} as='a' href='#'>
                    Blog
                </MenuItem>
                <MenuItem icon={<InfoIcon />} as='a' href='#about'>
                    Sobre nós
                </MenuItem>
                <MenuItem icon={<LockIcon />} as='a' href='/acesso'>
                    Acesso
                </MenuItem>
            </MenuList>
        </Menu>
    )
}