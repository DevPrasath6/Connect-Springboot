import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Space Grotesk, sans-serif',
    body: 'Space Grotesk, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'transparent',
        color: 'whiteAlpha.900',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
