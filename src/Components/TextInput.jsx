import React from "react";
import { Textarea,Stack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import copy from "copy-to-clipboard"; 

import ButtonClick from "./ButtonClick";


function TextInput() {
  let [value, setValue] = React.useState("");


  const copyToClipboard = () => {
    copy(value);
    alert(`You have copied "${value}"`);
 }

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const convertToLowerCase=()=>{
    let text=value.toLowerCase();
    setValue(text);
  }

  const convertToupperCase=()=>{
    let text=value.toUpperCase();
    setValue(text);
  }

  const clearText=()=>{
    setValue("");
  }

  const removeExtraSpace=()=>{
    let text='';
    for(let i=0;i<value.length;i++){
        if(!(value[i]===" " && value[i-1]===" ")){
            text+=value[i];
        }
    }
    setValue(text);
  }



  return (
    <>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Type Text here"
        margin={"25px"}
       padding="10px"
        
      />
       <Stack spacing={"auto"} direction='row' align='center' margin={"0px 30px 0px 30px"}>

      
      <ButtonClick value={"Convert Lover Case"} handleClick={()=>convertToLowerCase()}/>
      <ButtonClick value={"Convert Upper Case"} handleClick={()=>convertToupperCase()}/>
      <ButtonClick value={"Remove extra space"} handleClick={()=>removeExtraSpace()}/>
      <ButtonClick value={"Copy"} handleClick={()=>copyToClipboard()}/>
      <ButtonClick value={"Clear Text"} handleClick={()=>clearText()}/>
      {/* <ButtonClick value={"Copy"} handleClick={()=>copyToClipboard()}/> */}

       </Stack>

       <Text align={"center"} margin={"10px"}>
        {
            value?"Your Text Summary":null
        }
       </Text>
       <Text align={"center"} margin={"10px"}>
       {
            value?`No of Words :  ${value.split(" ").length}`:null
        }         
       </Text>
       <Text align={"center"} margin={"10px"}>
       {
            value?`No of sentences : ${value.split(".").length-1}`:null
        }         
       </Text>
       <Text align={"center"} margin={"10px"}>
        {
            value?`No of Characters : ${value.split("").length}`:null
        }
       </Text>
    </>
  );
}

export default TextInput;
