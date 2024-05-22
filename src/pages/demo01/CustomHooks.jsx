import {useState} from 'react';

const useToggle = () => {
  const [value, setValue] = useState(true)
  const toogleClick = () => setValue(!value)
  return {value, toogleClick}
}

const CustomHooks= () => {
  const {value ,toogleClick} = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
        <button onClick={toogleClick}>toggle</button>
    </div>
  );
};

export default CustomHooks;
