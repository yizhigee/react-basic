import Communication02 from "./pages/demo01/Communication02.jsx";
import {createContext, useState} from "react";
import Communication03 from "./pages/demo01/Communication03.jsx";


export const MsgContext = createContext()
const App = () => {
    const [name,setName] = useState('')
    const getMsg = (msg) => {
        setName(msg)
    }
    return (
        <div>
            <MsgContext.Provider  value={name}>
                <Communication02 onGetCommunication={getMsg}/>
                <Communication03 name={name}/>
            </MsgContext.Provider >
        </div>
    )
}

export default App
