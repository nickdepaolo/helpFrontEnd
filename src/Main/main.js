import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

const Main = (props) => {

    const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })
    const refreshCount = useState(0)

    const [helpData, setHelpData] = useState('')

    const apiurl = 'http://localhost:3000/'
    
    useEffect(() => {
        const x = refreshCount
        
    }, [])

    useEffect(() => {
        console.log(helpData)
    }, [helpData])

    useEffect(() => {
        getActiveCalls()
    }, [])

    function refresh() {
        window.location.reload(true)
    }

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
        }catch(err){
            console.log(err)
        }
    }

    function deleteRequest(deleteid) {
        console.log('tried')
        try{
            fetch(`${apiurl}help/delete/${deleteid}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(json=> console.log(json))
            .then(() => getActiveCalls())
            .then(refresh())
        } catch(err) {
            console.log(err)
        }
    };

    function conlog(e) {
        console.log(e)
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
            <br/>
            {Object.keys(helpData).map((item, i) => (
                <div key={i}>
                    <span> Name: {helpData[item].clientName}</span>
                    <br/>
                    <span>Room: {helpData[item].room}</span>
                    <br/>
                    <span>Issue: {helpData[item].issue}</span>
                    <br/>
                    <button onClick={() => deleteRequest(helpData[item].id)}>Cancel</button>
                    <br/>
                    <br/>
                </div>
            ))}
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