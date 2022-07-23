import { Box, Button, Divider, Flex,Image,Input,InputGroup,InputRightAddon,Spacer,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Cart = () => {
    const [show, setShow] = useState(false)
    const [item, setItem] = useState([])
    const [price1, setPrice1] = useState(0)
const {setCar} = useContext(AppContext)
const handleDelete=(id)=>{
    let r=JSON.parse(localStorage.getItem("cart"))
    let newarr=r.filter(e=>e.id!==id)
    localStorage.setItem("cart",JSON.stringify(newarr))
    setItem(newarr)
}
// var w=[]
// if(item.length!==0)
// setShow(true)
// let sum=0;
// for(let i=0;i<item.length;++i)
// {
//     sum+=item[i].price
// }
// setPrice1(sum)
    useEffect(() => {
       setItem(JSON.parse(localStorage.getItem("cart"))||[]);
       console.log(item.length)
       setCar(item.length)
         }, [item])
    
  return (
    <Box width="90%" margin="auto">
        <br/>
        <Flex>
        <Text>My Cart ({item.length} Items)</Text>
        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
        <Text>Shipping to:  670007 <i class="fa-solid fa-location-dot"></i></Text>
        <Spacer/>
        <Button colorScheme='red' variant='solid' width="30%">
            Checkout
        </Button>
        </Flex>
        <br/>
        <Flex>
            <Box width="67%">
                {item.map(e=>
                <>
                <Box border="1px solid #bdbdbd">
                <Flex>
                <Box>
                <Image src={e.image} alt="no" width="200px"/>
                <Flex width="170px" justifyContent="space-between" margin="auto">
                    <Button colorScheme="gray">-</Button>
                    <Input value={e.qty} width="70px"/>
                    <Button colorScheme="gray">+</Button>
                </Flex>
                </Box>
                <Box>
                    <br/>
                <Text width="400px" textAlign="left" fontWeight="bold" fontSize='sm'>{e.name}</Text>
                </Box>
                <Box textAlign="right">
                    <br/>
                    <Text fontWeight="bold">₹ {e.price}</Text>
                    <Text fontSize='xs'>Free Shipping</Text>
                    <Text fontSize='xs'>*Delivery assurance is subject to our delivery locations</Text>
                        <Text fontSize='xs'>staying open as per govt. regulations</Text>
                </Box>
                </Flex>
                <Flex>
                <Box cursor="pointer" color='blue'height="35px" variant='link' border="1px solid #bdbdbd" width="50%" onClick={()=>handleDelete(e.id)}>            Remove       </Box>
                <Box cursor="pointer" color='blue' variant='link' border="1px solid #bdbdbd" width="50%">            Move to Wishlist       </Box> 
                </Flex>
                </Box>
                <br/>
                </>
                )}
                
            </Box>
            <Spacer/>
            <Box border="1px solid #bdbdbd" width="30%" height="300px">
                <br/>
            <InputGroup size='sm'width="90%" margin="auto">
                <Input placeholder='Coupon Code' />
                <InputRightAddon children='APPLY' color="blue"/>
            </InputGroup>
            <Box width="90%" margin="auto">
            <Text fontWeight="bold" textAlign="left">PRICE DETAILS</Text>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Price (3 Items)</Text>
                <Text>₹{price1}</Text>
            </Flex>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Delivery Charges</Text>
                <Text color="green">FREE</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between">
                <Text>Discount</Text>
                <Text>₹1000</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between" fontWeight="bold">
                <Text>AMOUNT PAYABLE</Text>
                <Text>₹{price1-1000}</Text>
            </Flex>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Cart