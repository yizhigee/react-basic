import {configureStore} from '@reduxjs/toolkit'
import counterStore from "./modules/counterStore.js";
import channelStore from "./modules/channelStore.js";
// 导入子模块
const store = configureStore({
  reducer:{
    counter: counterStore,
    channel:channelStore
  }
})


export default store
