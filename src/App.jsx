import Commons from "./pages/demo01/Commons.jsx";
import GetRef from "./pages/demo01/GetRef.jsx";
import Communication from "./pages/demo01/Communication.jsx";
{/*<Commons/>*/}
{/* <hr/>*/}
{/* <GetRef/>*/}

const App = () => {
    const name = 'this is xiao liu'
    return (
        <div>
            <Communication name={name} child={<span>this is span</span>}>
                <p>哈哈哈这是p</p>
            </Communication>
        </div>
    )
}

export default App
