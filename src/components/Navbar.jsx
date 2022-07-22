import { Box, Button, Flex, Image, Input, Spacer, Icon } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css";
import Home from './Home';

const Navbar = () => {

  let cat = [
    {id: 1,title: "MOBILES & TABLETS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "TELEVISIONS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "HEADPHONES & SPEAKERS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "HOME APPLIANCES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "COMPUTERS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "CAMERAS",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "KITCHEN APPLIANCES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "PERSONAL CARE",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
    {id: 1,title: "ACCESSORIES",path: "/makeup", sub: {a: "LIPS",p1: "/",b: "FACE",p2: "/",c: "EYES",p3: "/",p4: "/",p5: "/",p6: "/",p7: "/",p8: "/",},},
  ];

  const navigate=useNavigate()
  return (
    <div >
      
      
    

      <Flex bg={"#e42529"} color="white">
          <Spacer/>
          <Flex width="300px">
          <Box>Find a store |</Box>
          <Box>Buying guides |</Box>
          <Box>Contact us</Box>
          </Flex>
        </Flex>
        <Box bg={"#e42529"} color="white">
        <br/>
        <Flex>
          <Spacer/>
        <Box width='150px'>
            <Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' alt='logo' onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>
        </Box>
        <Spacer/><Spacer/><Spacer/>
        <Input htmlSize={65} width='auto' bg={"white"} borderRadius="25px" placeholder='Find your favorite products' rightIcon={<Search2Icon/>}/>
        <Spacer/><Spacer/><Spacer/><Spacer/>
        <Flex width="300px">
        <Box>Select your location</Box>
        <Spacer/>
        <Box>Cart</Box>
        <Spacer/>
        <Box onClick={()=>navigate("/login")}>Login</Box>
        <Spacer/>
        </Flex>
        </Flex>
       
       <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#1f4985",color:"white",height:"30px"}}>
        <div className="box98" style={{cursor:"pointer"}}>MOBILES & TABLETS</div>
      <div className="box99">
<div style={{display:"flex",gap:"2rem",paddingLeft:"50px",height:"100%"}}> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}> 
<p>Smartphones</p>
<p>OnePlus Nord 2T 5G</p>
<p>Wearable Technology</p>
<p>Smart Watch Accessories</p>
<p>Accessories</p>
<p>Tablet Accessories</p>
<p>Mobile Accessories</p>
<p>Mobile Grips & Stands</p>
<p>Car Mobile Holders</p>
</div> 
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",height:"70%"}}>
<p>Headphones & Headsets</p>
<p>Tablets & eReaders</p>
<p>Every Day use Tablets below 15000</p>
<p>Premium Tablets, Above 15001</p>
<p>Power Banks</p>
<p>eSlates</p>
</div>
<div>
<p>AI Learning Robots</p>
</div>
</div>  
            </div>
      <div className="box97" style={{cursor:"pointer"}}>TELEVISIONS</div>
      <div className="box99">
            g34546hjggk
            </div>
      <div className="box96" style={{cursor:"pointer"}}>HEADPHONES & SPEAKERS</div>
      <div className="box99">
            g34546hjggk
            </div>
      <div className="box95" style={{cursor:"pointer"}}>HOME APPLIANCES</div>
      <div className="box99">
            g34546hjggk
            </div>
      <div className="box94">COMPUTERS</div>
      <div className="box99">
            g34546hjggk
            </div>
            <div className="box94">CAMERAS</div>
      <div className="box99">
            g34546hjggk
            </div>
            <div className="box94">KITCHEN APPLIANCES</div>
      <div className="box99">
            g34546hjggk
            </div>
            <div className="box94">PERSONAL CARE</div>
      <div className="box99">
            g34546hjggk
            </div><div className="box94">ACCESSORIES</div>
      <div className="box99">
            g34546hjggk
            </div>
       </div>

       
      
      
    
    </Box>
    </div>  
  )
}

export default Navbar