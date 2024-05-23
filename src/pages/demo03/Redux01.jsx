import {useDispatch, useSelector} from "react-redux";
import {increment,decrement,addToNum} from '../../store/modules/counterStore'
const Redux01 = () => {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(addToNum(10))}>+10</button>
      <button onClick={()=>dispatch(addToNum(20))}>+20</button>
    </div>
  );
};

export default Redux01;
