import {configureStore} from '@reduxjs/toolkit'
import counterStore from "./modules/counterStore.js";
// 导入子模块
const store = configureStore({
  reducer:{
    counter: counterStore
  }
})

export default store
