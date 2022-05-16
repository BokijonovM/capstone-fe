import React, { useEffect, useState } from 'react'
import MyLoader from '../../loader/MyLoader';

function RightInfo({ job }) {
    const [comp, setComp] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const fetchComp = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/companies/search/${job.companyName}`)
            if (res.ok) {
                let data = await res.json()
                setComp(data)
                setIsLoading(false)
                console.log("comp", data)
            } else {
                console.log("fetch comp error");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComp()
    }, [])
    return (
        <div className='w-100' style={{ height: "100%" }}>{isLoading ? <MyLoader /> :
            comp.map((c) => {
                <div className='w-100' style={{ height: "100%" }} key={c._id}>
                    <img className="banner-comp-image" src={c.banner} alt={c.name} />
                    <h1>{c.name}</h1>
                </div>
            })
        }
        </div>
    )
}

export default RightInfo