import React from 'react';
import styled from 'styled-components';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../store/StateProvider';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <CHECKOUT>
           <CheckoutLeft>
               <CheckoutAd 
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
               alt=""/>
               <CheckoutTitle> 
                   Your Shopping Basket 
               </CheckoutTitle>
               <h3>{user ? `Hello ${user.email}` : `Hello Guest`}</h3>
                {basket.map(item => (
                   <CheckoutProduct 
                     key={item.id}
                     id = {item.id}
                     title = {item.title}
                     image = {item.image}
                     price = {item.price}
                     rating = {item.rating}
                   /> 
               ))} 

           </CheckoutLeft>
           <CheckoutRight>
              <Subtotal />
           </CheckoutRight>
        </CHECKOUT>
    )
}

export default Checkout

const CHECKOUT = styled.div`
display: flex;
padding: 20px;
background-color: white;
height: max-content;`

const CheckoutLeft = styled.div``

const CheckoutRight = styled.div``

const CheckoutAd = styled.img`
width: 100%;
margin-bottom: 10px;`

const CheckoutTitle = styled.h2`
margin-right: 10px;
padding: 10px;
border-bottom: 1px solid lightgray;
`