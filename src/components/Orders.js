import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {db} from '../firebase'
import { useStateValue } from '../store/StateProvider';
import Order from './Order';

function Orders() {
   
   const [{basket, user}, dispatch] = useStateValue();
   const [orders, setOrders] = useState([]);

   useEffect(() => {
     if (user){
     db.collection('users')
     .doc(user?.uid)
     .collection('orders')
     .orderBy('created', 'desc')
     .onSnapshot(snapshot => (
         setOrders(snapshot.docs.map(doc => ({
             id: doc.id,
             data: doc.data()
         })))
     ))
        } else{
            setOrders([])
        }
   }, [user])

    return (
        <OrdersDiv>
            <h1>Your Orders:</h1>
            <OrderContainer>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </OrderContainer>
        </OrdersDiv>
    )
}

export default Orders

const OrdersDiv = styled.div`
padding: 20px 80px;
h1 {
    margin: 30px 0;
}
`
const OrderContainer = styled.div``