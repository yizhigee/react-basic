import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, addToNum} from '../../store/modules/counterStore'
import {fetchChannelList} from '../../store/modules/channelStore.js'

const Redux01 = () => {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (<div>
    <button onClick={() => dispatch(decrement())}>-</button>
    {count}
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(addToNum(10))}>+10</button>
    <button onClick={() => dispatch(addToNum(20))}>+20</button>
  </div>);
};

export default Redux01;
