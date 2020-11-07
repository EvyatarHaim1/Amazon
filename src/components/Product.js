import React from 'react'
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{basket} , dispatch] = useStateValue();

    console.log("this is the basket", basket);
    const addToBasket = () => {
      // dispatch the item into the data
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating
          }
      })
    }

    return (
        <PRODUCT>
            <ProductInfo>
                <ProductTitle> 
                    {title}
                </ProductTitle>
                <ProductPrice>
                  <small>$</small>
                  <strong>{price}</strong>
                </ProductPrice>
                <ProductRating>
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                    <p>⭐</p>
                    ))}
                </ProductRating>
            </ProductInfo>
                <ProductImg src={image} />
            <BTN onClick={addToBasket}>ADD TO BASKET</BTN>
        </PRODUCT>
    )
}

export default Product

const PRODUCT = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
margin: 10px;
padding: 20px;
width: 100%;
max-height: 400px;
min-width: 100px;
background-color: white;
z-index:1;
`

const ProductInfo = styled.div`
text-align: left;
height: 100px;
margin-bottom: 15px;`

const ProductTitle = styled.p``

const ProductPrice = styled.p`
margin: 5px;`

const ProductRating = styled.div`
display: flex;
`
const ProductImg = styled.img`
max-height: 200px;
width: 100%;
object-fit: contain;
margin-bottom: 15px;`

const BTN = styled.button`
background:#f0c14b;
border: 1px solid;
margin-top:10px;
border-color: #a88734 #9c7e31 #486a29;
color: #111;
cursor: pointer;`

