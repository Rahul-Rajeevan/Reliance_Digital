import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Container, Flex, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Style from "../components/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid1 from './Grid1';
const SmallAppliances = () => {
    const {addItems2}=useContext(AppContext)
    const handle=(e)=>{
        let [l,r]=e;
       let left=l*200+26999;
       let right=46999-(100-r)*200;
       console.log(left,right)
       setFirst(left)
       setSecond(right)
    }
    const [first, setFirst] = useState(26999)
    const [second, setSecond] = useState(46999)
  return (
    <Box>
        <Flex justifyContent="flex-start">
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>         <BreadcrumbLink href='#'><i class="fa-solid fa-house-chimney"></i></BreadcrumbLink>    </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage><BreadcrumbLink href='#'>Search</BreadcrumbLink></BreadcrumbItem>
        </Breadcrumb>
        </Flex>
        <hr/>
        <Flex>
            <Box width={"20%"} borderRight="1px solid #D3D3D3">
            <VStack  divider={<StackDivider borderColor='gray.200' />}  spacing={4}  align='stretch'>
            <Box h='40px' >FILTERS</Box>
            <Box>
                <VStack>
                    <Text>Price</Text>
                    <RangeSlider  aria-label={['min', 'max']}  defaultValue={[0,100]} onChange={(e)=>handle(e)}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                            <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Flex justifyContent={"space-between"} width="100%"><Text>₹26999</Text><Text>₹46999</Text></Flex>
                    <br/>
                    <Flex>
                        <Input value={first}/>
                        <Text>to</Text>
                        <Input value={second}/>
                        <Button>GO</Button>
                    </Flex>
                </VStack>
            </Box>
            <br/>
            <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Availability</Text>
                <Flex gap="1rem">
                <Checkbox />
                <Text>Exclude out of Stock</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem">
                <Checkbox />
                <Text>SmallAppliancess</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem" >
                <Checkbox />
                <Text>Lenovo</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox />
                <Text>Acer</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox />
                <Text>Hp</Text>
                </Flex>
             </VStack>
            </VStack>
            </Box>
            <Box>
                <Flex justifyContent="flex-start">
                        <Box>(Showing 1- 7 products of 7 products)</Box>
                </Flex>
                <hr/><br/>
                <Flex>
                    <Text>Filters</Text>
                    <Flex>
                        <Box>Exclude out of Stock</Box>
                        <Box>10 to 20</Box>
                    </Flex>
                </Flex>
            <Box>
            <hr/>
            <br/>
            {/* <Grid templateColumns='repeat(4, 1fr)' gap={4} paddingLeft="1%">
                {addItems1.map(e=>(<GridItem border={"1px solid #D3D3D3"}>
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
            </Grid> */}
            <Grid1 list1={addItems2}/>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default SmallAppliances