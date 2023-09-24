import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";

export function HeaderMenu() {
    const [showDooke, setShowDooke] = React.useState(false);
    const handleToggle = () => {
        setShowDooke(!showDooke);
    }
    return (
        <Menu>
            <MenuButton aria-label='Options' onClick={handleToggle} transition='all 0.2s'>
                {
                    showDooke ?
                        <Image src={"/dooke.png"} height={"50px"} border={2} />
                        :
                        <Image src={"/apenasodooke.png"} height={"50px"} border={2} />
                }
            </MenuButton>
            <MenuList color={"#000"}>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                    Home
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                    Blog
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                    Sobre nós
                </MenuItem>
            </MenuList>
        </Menu>
    )
}