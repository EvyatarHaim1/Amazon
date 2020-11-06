import React from 'react';
import styled from 'styled-components';

function Checkout() {
    return (
        <CHECKOUT>
           <CheckoutLeft>
               <CheckoutAd 
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
               alt=""/>
               <CheckoutTitle> 
                   Your Shopping Basket 
               </CheckoutTitle>
           </CheckoutLeft>
           <CheckoutRight>
               <h2>the subtotal will go here</h2>
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