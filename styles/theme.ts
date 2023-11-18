import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                // ":hover": {
                //     backgroundColor: "brand.400",
                //     color: "white",
                // }
            }
        }
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },

    colors: {
        brand: {
            50: "#E0F2F1",
            100: "#B2DFDB",
            200: "#80CBC4",
            300: "#4DB6AC",
            400: "#26A69A",
            500: "#157D77", // Cor principal
            600: "#0D5E5A",
            700: "#08463A",
            800: "#033D32",
            900: "#002A2A", // Cor mais escura
        }
    },
    fonts: {
        heading: `'Mooli', sans-serif`,
        // body: `'Mooli', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    styles: {
        global: {
            body: {
                backgroundColor: "#f0f0f0",
                color: "#002A2A",
            },

        },
    },
})

export { theme }

