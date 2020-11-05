import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <HEADER>
            <LOGO 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo" />
            <HEADER_SEARCH>
                <HEADER_SEARCH_INPUT type="text" />
                <SEARCH_ICON />
            </HEADER_SEARCH>
            <HEADER_NAV>
                <HEADER_OPTION>
                  <OPTION_LINE1> Hello Guest</OPTION_LINE1>
                  <OPTION_LINE2> Sign In</OPTION_LINE2>
                </HEADER_OPTION>
                <HEADER_OPTION>
                  <OPTION_LINE1> Returns</OPTION_LINE1>
                  <OPTION_LINE2>& Orders</OPTION_LINE2>
                </HEADER_OPTION>
                <HEADER_OPTION>
                  <OPTION_LINE1> Your</OPTION_LINE1>
                  <OPTION_LINE2> Prime</OPTION_LINE2>
                </HEADER_OPTION>
                <HEADER_OPTION_BASKET>
                  <ShoppingBasketIcon />
                  <Header_basket_Count>0</Header_basket_Count>
                </HEADER_OPTION_BASKET>
            </HEADER_NAV>
        </HEADER>
    )
}

export default Header

const HEADER = styled.header`
display: flex;
height: 60px;
align-items: center;
background-color: #131921;
position: sticky;
top: 0;
z-index:100;`

const LOGO = styled.img`
width: 100px;
object-fit: contain;
margin: 0 20px;
margin-top: 18px;`

const HEADER_SEARCH = styled.div`
display: flex;
flex: 1;
align-items: center;
border-radius: 24px;`

const SEARCH_ICON = styled(SearchIcon)`
padding: 5px;
height: 22px !important;
background-color: #cd9042;
`

const HEADER_SEARCH_INPUT = styled.input`
height: 12px;
padding: 10px;
border: none;
width: 100%;
`
const HEADER_NAV = styled.div`
display: flex;
justify-content: space-evenly;`

const HEADER_OPTION = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
color: white;
`
const OPTION_LINE1 = styled.span`
font-size: 10px;`

const OPTION_LINE2 = styled.span`
font-size: 13px;
font-weight: 800;`

const HEADER_OPTION_BASKET = styled.div`
display: flex;
align-items: center;
color: white;`

const Header_basket_Count = styled.span`
margin-left: 10px;
margin-right: 10px;`
