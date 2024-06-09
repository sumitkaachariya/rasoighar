import { configureStore } from '@reduxjs/toolkit'
import authSlice from './action/authSlice'

const store = configureStore({
   reducer: {
      auth: authSlice
   }
})
export default store
