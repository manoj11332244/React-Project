import { useState, useEffect } from 'react'
// import { Productitem } from '../utils/constaint';
import Skeleton from './Skeleton';
import Product from './Product';
import { HOF } from './Product';
import { Link } from 'react-router-dom'

export const Productcart = () => {
    const fetchData = async () => {
        let data = await fetch('https://fakestoreapi.com/products')
        let res = await data.json()
        // console.log(res)
        setProductItem(res)
        setFilterItem(res)
    }
    useEffect(() => {
        fetchData()
    }, [])

    // const [productitem, setProductItem]=useState(Productitem)
    const [productitem, setProductItem] = useState([])
    const [filteritem, setFilterItem] = useState([])
    const [search, setSearch] = useState("")

    const filterProduct = () => {
        const result = productitem.filter((productitem) => productitem.rating.rate >= 4)
        setProductItem(result)
    }

    const HOFComponent = HOF(Product)

    return productitem.length === 0 ? <Skeleton /> : (
        <div>
            <div className='flex items-center space-x-10 p-3 flex-row text-center mt-5'>
                <div className='items-center'>
                    <input className='border border-gray-700 rounded-sm py-1' type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
                    <button className='px-5 py-1 border bg-green-700 text-white rounded-sm' onClick={() => {
                        const filterData = productitem.filter((productitem) => {
                            return productitem.title.includes(search)
                        })
                        setFilterItem(filterData)
                    }}>Search</button>
                </div>
                <button className='px-5 py-1 border bg-green-700 text-white rounded-sm' onClick={filterProduct} style={{ "marginTop": "10px" }}>Top Rated Product</button>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4 mt-3">
                {
                    filteritem.map((product) => {
                        return (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                {
                                    product.rating.rate >= 4 ? <HOFComponent product={product} /> : <Product product={product} />
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}