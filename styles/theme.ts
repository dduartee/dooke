import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Mooli', sans-serif`,
        // body: `'Mooli', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            body: {
                backgroundColor: "#262626",
                color: "#fff",
            },
        },
    },
})

export { theme }

