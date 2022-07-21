import React from 'react'
import { Box,Input,Button,Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
    <div style={{height:"300px"}}>
        <br/>
        <Box marginLeft="65%" width="500px" boxShadow='md' display="flex" flexDirection="column" height="250px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Login/Register</Text>
        <Input placeholder='Enter Mobile Number' width="90%"/>
        <Button colorScheme='red' width="90%" onClick={()=>navigate("/register")}>PROCEED</Button>
        </Box>
        <br/>
    </div>
  )
}

export default Login