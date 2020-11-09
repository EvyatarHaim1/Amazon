import React from 'react'
import styled from 'styled-components';
import Product from './Product';

function Home() {
    return (
        <HOME>
            <HOME_CONTAINER>
                <HOME_IMG
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg"
                alt="amazon_home_img"
                />
                <HOME_ROW>
                    <Product 
                      id="12321341"
                      title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011" 
                      price={29.99} 
                      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                      rating={5} />
                   <Product 
                      id="49538094"
                      title="Kenwood kMix Stand Mixer 8 Speeds 550W Double Hooks 5.5QT LASANTEC Electric Kitchen Mixer Stainless Steel Bowl,Wire Whip,Flat Beater,Pouring Shield,Automatic..." 
                      price={139.99} 
                      image="https://images-na.ssl-images-amazon.com/images/I/71vEKuSvnGL._AC_SL1500_.jpg"
                      rating={4} />
                </HOME_ROW>
                <HOME_ROW>
                <Product 
                      id="456823998"
                      title="JBL Quantum 400 - Wired Over-Ear Gaming Headphones with USB and Game-Chat Balance Dial - Black"
                      price={99.95 } 
                      image="https://images-na.ssl-images-amazon.com/images/I/714ipl0CKHL._AC_SL1500_.jpg"
                      rating={5} />
                    <Product 
                      id="254612458"
                      title="Echo Dot (3rd Gen) Heather Gray Bundle with Senged 2-pack smart bulb starter kit"
                      price={78.98} 
                      image="https://images-na.ssl-images-amazon.com/images/I/41CAiwhdg7L._AC_.jpg"
                      rating={3} />
                   <Product 
                      id="117549201"
                      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
                      price={949.00} 
                      image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                      rating={5} />
                </HOME_ROW>
                <HOME_ROW>
                    <Product 
                      id="554973612"
                      title="Korg microKorg 37-Key Analog Modeling Synthesizer with Vocoder"
                      price={429.99} 
                      image="https://images-na.ssl-images-amazon.com/images/I/61Q4Fo%2ByVgL._AC_SL1200_.jpg"
                      rating={5} />
                    <Product 
                      id="5006498312"
                      title="Neumann TLM 103 Condensor Microphone"
                      price='1,099.99'
                      image="https://images-na.ssl-images-amazon.com/images/I/71JN5hFRQsL._AC_SL1500_.jpg"
                      rating={5} />
                   <Product 
                      id="88152496"
                      title="KRK RP5 Rokit G4 Studio Monitor, Black (RP5G4-NA)"
                      price={949.00} 
                      image="https://images-na.ssl-images-amazon.com/images/I/81hv8G5nHQL._AC_SL1500_.jpg"
                      rating={4} />
                    <Product 
                      id="77691524"
                      title="SKB Acoustic Guitar Case (1SKB-GSM)"
                      price={200.00} 
                      image="https://images-na.ssl-images-amazon.com/images/I/81Nbh-p-IpL._AC_SL1500_.jpg"
                      rating={5} />
                </HOME_ROW>
                <HOME_ROW>  
                <Product 
                      id="888221643"
                      title={`SAMSUNG Business S22R350FHN 22" 1920x1080, IPS panel, thin bezels, VGA/HDMI, Monitor, Black`}
                      price={129.92} 
                      image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._AC_SL1500_.jpg"
                      rating={3} />
                </HOME_ROW>
            </HOME_CONTAINER>
        </HOME>
    )
}

export default Home

const HOME = styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right:auto;
max-width: 1500px;
`
const HOME_CONTAINER = styled.div`

`
const HOME_ROW = styled.div`
display: flex;
z-index: 1;
margin-left: 5px;
margin-right:5px;`

const HOME_IMG = styled.img`
width: 100%;
z-index: -1;
margin-bottom: -50px;
mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0));
`