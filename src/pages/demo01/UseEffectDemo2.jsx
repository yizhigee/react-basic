import {useState} from 'react';
import UseEffectSon from "./UseEffectSon.jsx";

const UseEffectDemo2 = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
        {show && <UseEffectSon />}
        <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  );
};

export default UseEffectDemo2;
