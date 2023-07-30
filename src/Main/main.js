import React from "react";

import { Link } from "react-router-dom";

const Main = (props) => {

    function helpButton() {
        props.setWatersATrigger(false)
        props.setWatersAText('')
    }

    

    return(
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
            {props.watersATrigger === true? (<button onClick={helpButton}>Client Helped</button>) : ('')}
        </div>
    )
}

export default Main