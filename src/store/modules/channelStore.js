import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannel(state, action) {
      state.channelList = action.payload
    }
  }
});

const {setChannel} = channelStore.actions
const fetchChannelList = () => {
  return async (dispatch) => {
    const result = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannel(result.data.data.channels))
  }
}

export {fetchChannelList}
const  reducer = channelStore.reducer
export default  reducer
