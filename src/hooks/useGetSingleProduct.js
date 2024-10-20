import { useState, useEffect } from "react";

const useGetSingleProduct = ( productId) => {
    const [singleItem , setSingleItem]= useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const resData= await data.json()
        setSingleItem(resData)
    }

    return singleItem;
}

export default useGetSingleProduct;