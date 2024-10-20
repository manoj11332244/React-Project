import { useEffect, useState } from 'react';
import Skeleton from './Skeleton';
import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../hooks/useGetSingleProduct';

const ProductDetails = () => {
    // const [singleProduct, setSingleProduct] = useState(null);
    // const { productId } = useParams();

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const fetchData = async () => {
    //     const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    //     // const res = await fetch('https://fakestoreapi.com/products/1')
    //     const resData = await res.json();
    //     setSingleProduct(resData)
    //     // console.log(resData)
        
    // }

    const {productId} = useParams()
    const singleProduct = useGetSingleProduct(productId)

    if (singleProduct === null) {
        return <Skeleton />
    }

    const { image, title, rating, price, description } = singleProduct;

    return (
        <div style={{ "display": "flex", "justifyContent": "space-around", "flexDirection": "row", "paddingTop":"25px" }}>
            <div style={{"border": "1px solid black", "padding": "1vw 8vw", "borderRadius": "20px"}}>
                <img style={{ "width": "24vw", 'height': "100%"}} src={image} />
            </div>

            <div style={{"paddingLeft": "30px"}}>
                <h1>Product Details</h1>
                <h2 style={{"padding":"2vw 0","fontSize": "2vw" , "fontWeight": "600"}}>Title :- {title}</h2>
                <p style={{"fontSize":"2vw"}}><h6 style={{"display":"inline", "fontSize":"1.2vw"}}>Rating:- </h6>{rating.rate}</p>
                <button style={{"border":"1px solid black" ,"border-radius": "10px", "backgroundColor": "green", "padding": "10px 2vw", color : "white"}}>BUY</button>
                <h3 style={{fontSize: "1vw" , "paddingRight":"3vw"}}>Price :- <h1 style={{display:"inline"}}>${price}</h1></h3>
                <h5>Remaining Products:- <h1 style={{"display":"inline", "fontSize":"1.2vw", "fontWeight":"400"}}>{rating.count} </h1></h5>
                <p><h4 style={{"display":"inline-block"}}>Product Description :-</h4> {description}</p>
            </div>

        </div>
    )
}

export default ProductDetails;