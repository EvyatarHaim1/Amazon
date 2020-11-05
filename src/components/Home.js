import React from 'react'
import styled from 'styled-components';

function Home() {
    return (
        <HOME>
            <HOME_CONTAINER>
                <HOME_IMG
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
                alt="amazon_home_img"
                />
            </HOME_CONTAINER>
        </HOME>
    )
}

export default Home

const HOME = styled.div`
`
const HOME_CONTAINER = styled.div``

const HOME_IMG = styled.img`
width: 100%;
z-index: -1;
margin-bottom: -150px;
mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0));`