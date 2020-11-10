import userEvent from '@testing-library/user-event';
import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    return (
        <PAYMENT>
            <PaymentContainer>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
              <PaymentSection>
                <PaymentTitle>
                   <h3>Delivery Address</h3>
                </PaymentTitle>
                   <PaymentAddress>
                      <p>{user?.email}</p>
                      <p>123 React Lane</p>
                      <p>Los Angeles, CA</p>
                   </PaymentAddress>
                
              </PaymentSection>

              <PaymentSection>
                  <PaymentTitle>
                     <h3>Review items and delivery</h3>
                  </PaymentTitle>
                  <PaymentItem>
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
                  </PaymentItem>
                    
              </PaymentSection>
                 
              <PaymentSection>
                    <PaymentTitle>
                        <h3>Payment Method</h3>
                    </PaymentTitle>
                    <PaymentDetails>

                    </PaymentDetails>
              </PaymentSection>

            </PaymentContainer>
        </PAYMENT>
    )
}

export default Payment

const PAYMENT = styled.div`
background-color: white;
`

const PaymentContainer = styled.div`
h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
}
h1 a {
    text-decoration: none;
}`

const PaymentSection = styled.div`
display: flex;
padding: 20px;
margin: 0 20px;
border-bottom: 1px solid lightgray;`

const PaymentTitle = styled.div`
flex: 0.2;`

const PaymentAddress = styled.div`
flex: 0.8;`

const PaymentItem = styled.div`
flex: 0.8;`

const PaymentDetails = styled.div``









