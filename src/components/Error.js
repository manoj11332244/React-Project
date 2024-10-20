import { useRouteError } from "react-router-dom"


const Error = () => {
    let err= useRouteError()
    return(
        <div>
            <h1>OOPS!! Not Found Page</h1>
            <h2>{err.status}-{err.statusText}</h2>
        </div>
    )
}

export default  Error;