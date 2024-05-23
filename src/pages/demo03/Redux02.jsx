import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChannelList} from '../../store/modules/channelStore.js'

const Redux02 = () => {

  const {channelList} = useSelector(state => state.channel)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (<div>
    <ul>
      {channelList.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  </div>);
};

export default Redux02;
