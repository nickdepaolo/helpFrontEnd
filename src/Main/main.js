import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";

const Main = (props) => {

    const isDesktop = useMediaQuery({ query: '(min-width: 500px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' })

    const [helpData, setHelpData] = useState('')

    const apiurl = 'http://localhost:3000/'
    
    useEffect(() => {
        const interval = setInterval(() => {
            getActiveCalls();
        }, 5*1000);
    }, [])

    useEffect(() => {
        getActiveCalls()
    }, [])

    function getActiveCalls() {
        try{fetch('http://localhost:3000/help/')
        .then(res => res.json())
        .then(
            json => {setHelpData(json)})
        .then(console.log('data fetched'))
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
            .then(getActiveCalls())
        } catch(err) {
            console.log(err)
        }
    };

   

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
            {Object.keys(helpData).map((item, i) => (
                <div key={i}>
                    <span> Name: {helpData[item].clientName}</span>
                    <br/>
                    <span>Room: {helpData[item].room}</span>
                    <br/>
                    <span>Issue: {helpData[item].issue}</span>
                    <br/>
                    <br/>
                    <button onClick={() => deleteRequest(helpData[item].id)}>Close</button>
                    <p>__________________</p>
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