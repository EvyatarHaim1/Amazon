import React from 'react'
import styled from 'styled-components';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    return (
        <OrderDiv>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <OrderId>
                <small>{order.id}</small>
            </OrderId>
           {order.data.basket?.map(item => (
               <CheckoutProduct 
                    key={item.id}
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    hideButton
             /> 
           ))}
                <CurrencyFormat
                    renderText={(value) => (
                        <OrderTotal>Order Total: {value}</OrderTotal>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                />
        </OrderDiv>
    )
}

export default Order

const OrderDiv = styled.div`
padding: 40px;
margin: 20px 0;
border: 1px solid lightgray;
background-color: white;
position: relative;`

const OrderId = styled.p`
position: absolute;
top: 40px;
right: 20px;`

const OrderTotal = styled.h3`
font-weight: 500;
text-align: right;`