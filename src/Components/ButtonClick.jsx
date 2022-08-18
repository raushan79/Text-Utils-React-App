import React from 'react'
import { Button } from '@chakra-ui/react'

function ButtonClick(props) {
    const {value,handleClick,}=props
  return (
   
  <Button colorScheme='teal' size='md' onClick={handleClick}>
    {value}
  </Button>

  )
}

export default ButtonClick
