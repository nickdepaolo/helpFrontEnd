import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const WatersA = (props) => {

    const isDesktop = useMediaQuery({query: '(min-width: 500px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
  

    const [userInput, setUserInput] = useState('')

    //add fetches when server done
    function helpButton() {
        props.setWatersATrigger(true)
        helpText()
    }

    function helpText() {
        props.setWatersAText(userInput)
    }

    function cancelHelp() {
        props.setWatersATrigger(false)
        props.setWatersAText('')
    }

    if(isDesktop){
        return(
            <div>
                <h1>Waters A</h1>
                {props.watersATrigger&& <h1>Assistance Requested</h1>}
                {props.watersATrigger&& <h1>{userInput}</h1>}            
                {props.watersATrigger&& <button onClick={cancelHelp}>Cancel Assistance Request</button>}
                {props.watersATrigger !== true? <button onClick={helpButton}>Request Assistance</button> : ''}
                {props.watersATrigger !== true? <input id="AHelpInput" placeholder="How can we help you?" autoComplete="off" onChange={(e) => setUserInput(e.target.value)}/> : ''}

            </div>
    )

    }else if(isMobile){
        return(
            <div>
                <h1>Waters A</h1>
            </div>
        )
    }
}

export default WatersA