import React,{useState, useEffect } from 'react'

function Lightbox({status}) {

    const [data, setdata] = useState(true)
    const toggleHandler = () => setdata(data => !data )

    useEffect(() => {
        setdata(status)
    },[status])

    document.title = "Home"

    return (
        
        <div className={`card col-md-2 m-2 p-3 ${data?'bg-warning':'bg-dark'}`}>
            {data?<div className="text-center mb-3 text-white">Light On</div>:<div className="text-center mb-3 text-white">Light Off</div>}
            <button onClick={toggleHandler}>{data?"OFF":"ON"}</button>
        </div>
    )
}

export default Lightbox
