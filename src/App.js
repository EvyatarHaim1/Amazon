import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './store/StateProvider';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HltY1AJiKyvZ9Hb4FtaLzJhh4giNQqWf7j8fbF4esDzcUUD0pNbs0b3lzAY28LWGCuV7kiIdVzSWNxkRqAHZZIK00iD4aByHb');

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser);
     
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/orders">
                  <Header />
                  <Orders /> 
                     </Route>
            <Route path="/login">
                  <Login /> 
                </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                 <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
