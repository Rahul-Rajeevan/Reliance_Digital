import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Container, Flex, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Style from "../components/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid1 from './Grid1';
import { reducer } from '../components/reducer';
const Tablets = () => {
    const {addItems10,inlove}=useContext(AppContext)
    const handle=(e)=>{
        let [l,r]=e;
       let left=l*200+26999;
       let right=46999-(100-r)*200;
    //    console.log(left,right)
       setFirst(left)
       setSecond(right)
    }
    const [first, setFirst] = useState(26999)
    const [second, setSecond] = useState(46999)
    const [item1, setitem1] = useState(addItems10)
    const handleSlider=()=>{
        let y=addItems10.filter(e=>(e.price>first&&e.price<second))
        setitem1(y)
    }
    const handleBrand=(val,check)=>{
        let g=check.target.checked;
        if(g===true)
        {let y=addItems10.filter(e=>e.name.includes(val))
        setitem1(y)}
        else
        setitem1(addItems10)
    }

    const [state, dispatch] = useReducer(reducer,inlove)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                        <Input value={first} onChange={(e)=>setFirst(e.target.value)}/>
                        <Text>to</Text>
                        <Input value={second} onChange={(e)=>setSecond(e.target.value)}/>
                        <Button onClick={handleSlider}>GO</Button>
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
                <Text>Tablets</Text>
                </Flex>
             </VStack>
             <VStack alignItems="flex-start" paddingLeft="10px">
                <Text>Category</Text>
                <Flex gap="1rem" > <Checkbox onChange={(e)=>handleBrand("Lenovo",e)}/>
                <Text>Lenovo</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("Apple",e)}/>
                <Text>Apple</Text>
                </Flex>
                <Flex gap="1rem">
                <Checkbox onChange={(e)=>handleBrand("Samsung",e)}/>
                <Text>Samsung</Text>
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
            <hr/><br/>
            <Grid1 list1={item1}/>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Tablets