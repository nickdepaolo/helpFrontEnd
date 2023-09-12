import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const WatersA = (props) => {

    const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
  

    const [clientNameInput, setClientNameInput] = useState('')
    const [issueInput, setIssueInput] = useState('')
    const [roomInput, setRoomInput] = useState('Waters A')
    const [helpData, setHelpData] = useState('')
    const [requestId, setRequestId] = useState('')

    const apiurl = 'http://localhost:3000/'

    useEffect(() => {
        helpData && setRequestId(helpData.helpRequest.id)
    }, [helpData])

    useEffect(() => {
        console.log(requestId)
    }, [requestId])

    function helpButton() {
        props.setWatersATrigger(true)
        helpText()

        let newRequest = {
            help:  {
                clientName: clientNameInput,
                issue: issueInput,
                room: roomInput
            }
        }

        fetch(`${apiurl}help/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRequest)
        })
        .then(res => res.json())
        .then(
            json => {setHelpData(json)})
        .catch(err => {
            console.log(err)
        })
    }

    function deleteRequest() {
        console.log('tried')
        try{
            fetch(`${apiurl}help/delete/${requestId}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(json=> console.log(json))
            props.setWatersATrigger(false)
            props.setWatersAText('')
        } catch(err) {
            console.log(err)
        }
    };

    function helpText() {
        props.setWatersAText(issueInput)
    }

    if(isDesktop){
        return(
            <div>
                <h1>Waters A</h1>
                {props.watersATrigger&& <h1>Assistance Requested</h1>}
                {props.watersATrigger&& <button onClick={deleteRequest}>Cancel Assistance Request</button>}
                {props.watersATrigger !== true? <button onClick={helpButton}>Request Assistance</button> : ''}
                {props.watersATrigger !== true? <input id="clientNameInput" placeholder="Your Name Here" autoComplete="off" onChange={(e) => setClientNameInput(e.target.value)}/> : ''}
                {props.watersATrigger !== true? <input id="issueInput" placeholder="How can we help you?" autoComplete="off" onChange={(e) => setIssueInput(e.target.value)}/> : ''}
                {props.watersATrigger !== true? <input id="roomInput" placeholder="Waters A" autoComplete="off" onChange={(e) => setRoomInput(e.target.value)}/> : ''}

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