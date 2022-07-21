import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Container, Flex, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Style from "../components/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Grid1 = ({list1}) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={4} paddingLeft="1%">
                {list1.map(e=>(<GridItem border={"1px solid #D3D3D3"}>
                <Box boxSize='180px'>
                    <Image src={e.image} alt='Dan Abramov' />
                </Box>
                <Text className={Style.h1} paddingLeft="10px" color={"#1f4985"}>{e.name}</Text>
                    <Flex paddingLeft="10px" >
                    <Text>₹{e.price}</Text>
                    <Text textDecoration={"line-through"}>{e.offer}</Text>
                    <Text color={"green"}>{e.save}%</Text>
                    </Flex>
                    <button className={Style.b1}>OFFERS AVAILABLE</button>
                    <Flex >
                        <Flex border={"1px solid #D3D3D3"} gap="1rem" width="50%" height="40px" alignItems="center" justifyContent="center"><Checkbox /><Text>Compare</Text></Flex>
                        <Flex border={"1px solid #D3D3D3"} gap="1rem" width="50%" height="40px" alignItems="center" justifyContent="center"><Text>Wishlist</Text></Flex>
                    </Flex>
                </GridItem>))}
            </Grid>
  )
}

export default Grid1