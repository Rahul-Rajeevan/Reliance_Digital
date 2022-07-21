import React from 'react'
import { Box,Input,Button,Text,Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();
  return (
    <div style={{height:"700px"}}>
        <br/>
        <Box margin="auto" width="500px" boxShadow='md' display="flex" flexDirection="column" height="600px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Register New Account</Text>
        <Input placeholder='First Name*' width="90%"/>
        <Input placeholder='Last Name*' width="90%"/>
        <Input placeholder='Email Address*' width="90%"/>
        <Text  fontSize='xs'>Your email address will be used to send order invoice, order updates etc.</Text>
        <Button colorScheme='red' variant='outline'>
            Verify Email
        </Button>
        <Input placeholder='Mobile Number*' width="90%"/>
        <Text  fontSize='xs'>Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyality Points and receive quick notifications.

</Text>
        <Button colorScheme='red' width="90%" onClick={()=>navigate("/register")}>PROCEED</Button>
        <Flex justifyContent="center" alignItems="center" >
        <Text  fontSize='xs'>Already registered?</Text>
        <Button colorScheme='red' variant='link'>
            LOGIN
        </Button>
        </Flex>
        
        <br/>
        </Box>
        <br/>
    </div>
  )
}

export default Register