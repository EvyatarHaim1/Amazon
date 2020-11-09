import React, {useState} from 'react';
import styled from 'styled-components';
import {Link , useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then( auth => {
          history.push('/')
      })
      .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <LOGIN>
            <Link to="/">
            <img src="https://streamingwars.com/wp-content/uploads/2020/02/amazon.jpg" alt="amazon-logo" />
            </Link>
            
            <LoginContainer>
              <h1>Sign-in</h1>

              <form>
                  <h5>E-mail</h5>
                  <input type="text" 
                         value={email} 
                         onChange={e => setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type="password" 
                         value={password} 
                         onChange={e => setPassword(e.target.value)}/>

                  <LoginSiginInBTN type="submit" 
                                   onClick={signIn}> Sign In </LoginSiginInBTN>
              </form>

              <p>
                  By signin-in you agree to The AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
              </p>
              <LoginRegisterBTN onClick={register}> Create your Amazon Account</LoginRegisterBTN>
            </LoginContainer>
        </LOGIN>
    )
}

export default Login

const LOGIN = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
background-color: white;
img {
    margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
}`

const LoginContainer = styled.div`
width: 300px;
height: fit-content;
display: flex;
flex-direction: column;
border-radius: 5px;
border: 1px solid;
padding: 20px;
h1{
    font-weight: 500;
    margin-bottom: 20px;
}
form > h5 {
    margin-bottom: 5px;
}
form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
}
p{
    margin-top: 15px;
    font-size: 12px;
}
`
const LoginSiginInBTN = styled.button`
background-color: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;`

const LoginRegisterBTN = styled.button`
border-radius: 2px;
width: 100%;
height: 30px;
border: 1px solid;
margin-top: 10px;
border-color: darkgray;
cursor: pointer;`
