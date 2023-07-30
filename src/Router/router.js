import React, {useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Main from '../Main/main'
import WatersA from '../Rooms/watersA'

const Router = (props) => {

    const [watersATrigger, setWatersATrigger] = useState(false)
    const [watersAText, setWatersAText] = useState('')

        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={

                            <Main 

                                watersATrigger={watersATrigger} 
                                setWatersATrigger={setWatersATrigger} 
                                
                                watersAText={watersAText} 
                                setWatersAText={setWatersAText}/>}
                           
                            />

                        <Route path='/WatersA' element={<WatersA setWatersATrigger={setWatersATrigger} watersATrigger={watersATrigger} watersAText={watersAText} setWatersAText={setWatersAText}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
}

export default Router 