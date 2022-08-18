import React from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import { Text } from '@chakra-ui/react'

function App() {
  return (
    <div>    
      <Text fontSize={'25px'} align={'center'} margin={'20px'}>Text Utils App in React</Text>    
      <TextInput/>
    </div>
  )
}

export default App
