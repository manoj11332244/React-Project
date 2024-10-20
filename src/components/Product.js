
import { Productcart } from "./Productcart";

const Product=({product})=>{
    const {title,price,image,rating}=product;
    return (
        <div className="border border-gray-600 flex text-center h-[400px] justify-center items-center flex-col rounded-lg px-2 hover:bg-gray-200">
            <img className="w-[45%]" src={image}/>
            <p>{title}</p>
            <p>{rating.rate} rating</p>
            <button className="bg-green-700 text-white px-3 py-1 rounded-md">Buy</button>
            <p>Price : $ {price}</p>
        </div>
    )
}

export default Product;


export const HOF =(Product) => {
    return (props)=>{
        return (
            <div className="relative">
                <span className="absolute -left-2 -top-2 bg-black text-white px-4 py-1 rounded-md">Best Seller</span>
                <Product {...props} />
            </div>
        )
    }
}
