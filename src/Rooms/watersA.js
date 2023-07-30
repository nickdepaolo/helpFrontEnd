import React, { useState } from "react";

const WatersA = (props) => {

    const [userInput, setUserInput] = useState('')

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
}

export default WatersA