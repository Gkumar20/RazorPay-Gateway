import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from "./Card"
// import Sidebar from './sidebar'
import axios from 'axios'
const Home = () => {

    const checkoutHandler= async(amount)=>{
        const {data} = await axios.post("http://localhost:8080/api/checkout",{
            amount
        })
        console.log(data)
    }
  return (
    <Box>
        <Stack direction={["column","row"]}>
        <Card amount={5000 } img={"https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/m/a/macbook-a1707-i7-2017.jpg"} checkoutHandler={checkoutHandler}/>
        <Card amount={5000 } img={"https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/m/a/macbook-a1707-i7-2017.jpg"} checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home