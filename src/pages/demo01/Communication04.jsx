import {useContext} from "react";
import {MsgContext} from "../../App.jsx";

const Communication04 = () => {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is communication 04....{msg} <br/>

        </div>
    );
};

export default Communication04;
