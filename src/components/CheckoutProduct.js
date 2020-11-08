import React from 'react';
import styled from 'styled-components';
import {useStateValue} from '../store/StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {

   const [{basket}, dispatch] = useStateValue();

   const removeFromBasket = () => {
     dispatch({
         type: 'REMOVE_FROM_BASKET',
         id: id,
     })
   }

    return (
        <CheckoutProductDiv>
            <img src={image} alt="" />
            <CheckoutProductInfo>
                <CheckoutTitle>{title}</CheckoutTitle>
                <CheckoutPrice>
                    <small>$</small>
                    <strog>{price}</strog>
                </CheckoutPrice>
                <CheckoutRating>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                          <p>⭐</p>
                          ))}
                </CheckoutRating>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </CheckoutProductInfo>
        </CheckoutProductDiv>
    )
}

export default CheckoutProduct

const CheckoutProductDiv = styled.div`
display:flex;
margin-top: 20px;
margin-bottom: 20px;
img {
  object-fit: contain;
  width: 180px;
  height: 180px;
}`

const CheckoutProductInfo = styled.div`
padding-left: 20px;
button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
}`

const CheckoutTitle = styled.p`
    font-size: 17px;
    font-weight: 800;`

const CheckoutPrice = styled.p``

const CheckoutRating = styled.div`
 display: flex;`

