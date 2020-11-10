import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../store/reducer';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import {db } from '../firebase'

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProccessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      // Generate the special stripe secret which allows us to charge  a customer
      const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        })
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
    }, [basket])

    console.log('the secret is ', clientSecret)

    const handleSubmit = async (event) => {
      event.preventDefault();
      setProccessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent }) => {
          // PaymentIntent = payment confirmation
          db
           .collection('users')
           .doc(user?.uid)
           .collection('orders')
           .doc(paymentIntent.id)
           .set({
               basket: basket,
               amount: paymentIntent.amount,
               created: paymentIntent.created
           })

          setSucceeded(true);
          setError(null);
          setProccessing(false);

          dispatch({
              type: 'EMPTY_BASKET'
          })

          history.replace('/orders')
      })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

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
                       <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange}/>
                           <PaymentPriceContainer>
                               <CurrencyFormat
                                  renderText={(value) => (
                                      <h3>Order Total: {value}</h3>
                                  )}
                                  decimalScale={2}
                                  value={getBasketTotal(basket)}
                                  displayType={"text"}
                                  thousandSeperator={true}
                                  prefix={"$"}
                                   />
                                <button disabled={ processing || disabled || succeeded}>
                                    <span> {processing ? <p> Processing</p> : "Buy Now"}</span>
                                </button>
                           </PaymentPriceContainer>
                           {error && <div> {error} </div>}
                       </form>
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

const PaymentDetails = styled.div`
flex: 0.8;
form {max-width: 400px;}
h3 { margin-bottom: 20px;}
form > div > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}`



const PaymentPriceContainer = styled.div``








