import { theme } from '@/styles/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Mooli&family=Raleway&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:image" content="https://www.dooke.co/SEObg.png" /> 
        <meta property="og:url" content="https://www.dooke.co" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Inicie no mundo da robótica com a Dooke!" />
        <meta name="description" content="Inicie no mundo da robótica com a Dooke!" />
                {/* <meta property="og:title" content="Dooke Education" /> */}
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
