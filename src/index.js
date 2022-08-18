import React, {StrictMode} from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'




ReactDom.createRoot(document.getElementById("root")).render(
    <StrictMode>
         <ChakraProvider>
        <App/>
         </ChakraProvider>
    </StrictMode>
    
)