import { Box, Button, Flex, Image, Input, Spacer, Icon } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'


const Home = () => {
  return (
    <Box bg={"#e42529"} color="white" height="105px">
        <Flex>
          <Spacer/>
          <Flex width="300px">
          <Box>Find a store |</Box>
          <Box>Buying guides |</Box>
          <Box>Contact us</Box>
          </Flex>
        </Flex>
        <br/>
        <Flex>
          <Spacer/>
        <Box boxSize='150px'>
            <Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' alt='logo' />
        </Box>
        <Spacer/><Spacer/><Spacer/>
        <Input htmlSize={65} width='auto' bg={"white"} borderRadius="25px" placeholder='Find your favorite products'/>
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
        <Flex bg={"#1f4985"} justifyContent="space-around" height="35px">
        <Box>MOBILES & TABLETS<ChevronDownIcon /></Box>
        <Box>TELEVISIONS<ChevronDownIcon /></Box>
        <Box>HEADPHONES & SPEAKERS<ChevronDownIcon /></Box>
        <Box>HOME APPLIANCES<ChevronDownIcon /></Box>
        <Box>COMPUTERS<ChevronDownIcon /></Box>
        <Box>CAMERAS<ChevronDownIcon /></Box>
        <Box>KITCHEN APPLIANCES<ChevronDownIcon /></Box>
        <Box>PERSONAL CARE<ChevronDownIcon /></Box>
        <Box>ACCESSORIES<ChevronDownIcon /></Box>
        </Flex>
    </Box>
  )
}

export default Home