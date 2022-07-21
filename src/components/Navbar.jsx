import { Box, Button, Flex, Image, Input, Spacer, Icon } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"
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
        <div style={{position:"sticky",top:"0",zIndex:1}}>
        <Box bg={"#e42529"} color="white">
        <br/>
        <Flex>
          <Spacer/>
        <Box width='150px'>
            <Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' alt='logo' />
        </Box>
        <Spacer/><Spacer/><Spacer/>
        <Input htmlSize={65} width='auto' bg={"white"} borderRadius="25px" placeholder='Find your favorite products' rightIcon={<Search2Icon/>}/>
        <Spacer/><Spacer/><Spacer/><Spacer/>
        <Flex width="300px">
        <Box>Select your location</Box>
        <Spacer/>
        <Box>Cart</Box>
        <Spacer/>
        <Box>Login</Box>
        <Spacer/>
        </Flex>
        </Flex>
       

        <div className="upperBox">
        {cat.map((el) => (
          <div className="main_menu" key={el.id}>
            <Link className="menu-btn" to={el.path}>
              {el.title}
            </Link>

            <div className="xyz">
              <div className="b">
                <div className="div">
                  <ul>
                    <li>
                      <Link className="p" to={el.sub.p1}>
                        {el.sub.a}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p2}>
                        {el.sub.b}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p3}>
                        {el.sub.c}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p4}>
                        {el.sub.d}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p5}>
                        {el.sub.e}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p6}>
                        {el.sub.f}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p7}>
                        {el.sub.g}
                      </Link>
                    </li>
                    <li>
                      <Link className="p" to={el.sub.p8}>
                        {el.sub.h}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        ))}
      </div>   
    
    </Box>
    </div>
    </div>  
  )
}

export default Navbar