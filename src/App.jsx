import Commons from "./pages/demo01/Commons.jsx";
import GetRef from "./pages/demo01/GetRef.jsx";
import Communication from "./pages/demo01/Communication.jsx";
import Communication02 from "./pages/demo01/Communication02.jsx";
import {useState} from "react";
import Communication03 from "./pages/demo01/Communication03.jsx";
{/*<Commons/>*/}
{/* <hr/>*/}
{/* <GetRef/>*/}

const App = () => {
    const getMsg = (msg) => {
        setName(msg)
    }
    const [name,setName] = useState('')
    return (
        <div>
            <Communication02 onGetCommunication={getMsg}/>
            <Communication03 name={name}/>
        </div>
    )
}

export default App
