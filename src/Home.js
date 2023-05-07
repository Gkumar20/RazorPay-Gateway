import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from 'axios'
const Home = () => {

    const checkoutHandler = async (amount) => {
        const {data:{key}} = await axios.get('http://localhost:8080/api/getkey')
        const { data:{order} } = await axios.post("http://localhost:8080/api/checkout", {
            amount
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Ganesh Kumar",
            description: "Test Transaction",
            image: "https://img.freepik.com/free-vector/business-avatar-template_23-2147502917.jpg?w=740&t=st=1682516054~exp=1682516654~hmac=1c31674e10ca710370c9a38dceb65684cc94cb5874dc60b23dedc41f98c49ca8",
            order_id: order.id,
            callback_url: "http://localhost:8080/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },           
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
            razor.open();
    }
    
    return (
        <Box>
            <Stack direction={["column", "row"]}>
                <Card amount={5000} img={"https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/m/a/macbook-a1707-i7-2017.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/m/a/macbook-a1707-i7-2017.jpg"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home