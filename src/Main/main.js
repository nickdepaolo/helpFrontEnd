import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

const Main = (props) => {

    const isDesktop = useMediaQuery({query: '(min-width: 500px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
    const [helpData, setHelpData] = useState('')
    const [helpArray, setHelpArray] = useState([])

    useEffect(() => {
        let newArray = []

    }, [helpData])

    //add fetch after server is done
    function helpButton() {
        props.setWatersATrigger(false)
        props.setWatersAText('')
    }

    function getActiveCalls() {
        try{fetch('http://localhost:3000/help/')
        .then(res => res.json())
        .then(
            json => {setHelpData(json)})
        .then(console.log(JSON.parse(JSON.stringify(helpData))))
        }catch(err){
            console.log(err)
        }
    }

    if(isDesktop){return(
        <div>
            <h1>Monitor Page</h1>
            <h1>Embassy Noblesville</h1>
            <Link to='/WatersA'>
                <button>Waters A</button>
            </Link>
            <br/>
            <br/>
            <br/>
            {props.watersATrigger&& <h1>Help Waters A</h1>}
            <h1>{props.watersAText}</h1>
            {props.watersATrigger&& <button onClick={helpButton}>Client Helped</button>}
            <button  onClick={getActiveCalls}>Fetch</button>
            <h1>{}</h1>
        </div>
    )
    }else if(isMobile){
        return(
            <div>

            </div>
        )
    }
}

export default Main