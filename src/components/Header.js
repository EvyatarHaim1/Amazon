import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <HEADER>
            <LOGO 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo" />
            <HEADER_SEARCH>
                <HEADER_SEARCH_INPUT type="text">
                   {/* logo */}
                </HEADER_SEARCH_INPUT>
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
object-fit:contain;
margin: 0 20px;
margin-top: 18px;`

const HEADER_SEARCH = styled.div``

const HEADER_SEARCH_INPUT = styled.input``
const HEADER_NAV = styled.div``
const HEADER_OPTION = styled.div``
const OPTION_LINE1 = styled.span``
const OPTION_LINE2 = styled.span``
