import React from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

const Main = (props) => {

    const isDesktop = useMediaQuery({query: '(min-width: 500px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
  
    //add fetch after server is done
    function helpButton() {
        props.setWatersATrigger(false)
        props.setWatersAText('')
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
            {props.watersATrigger === true? (<button onClick={helpButton}>Client Helped</button>) : ('')}
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