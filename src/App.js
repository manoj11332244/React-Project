import React, {lazy, Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { Productcart } from './components/Productcart';
// import Count from './components/Count';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Kid from './components/Kid';
import Error from './components/Error';
import ProductDetails from './components/ProductDetails';
import About from './components/About'
// import Grossory from './components/Grossory'

const Grossory = lazy(()=>import('./components/Grossory'))

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Productcart />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/kid",
                element: <Kid />
            },
            {
                path: "/men",
                element: <Men />
            },
            {
                path: "/women",
                element: <Women />
            },
            {
                path: "/grossory",
                element: <Suspense fallback={<h1>Loading ......</h1>}><Grossory /></Suspense>
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
        ],
        errorElement: <Error/>
    } 
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)