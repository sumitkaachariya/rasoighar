import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLogin: false
}

const authSlice = createSlice({
   name: 'Auth',
   initialState: initialState,
   reducers: {
      setIsLogin: (state, action) => {
         state.isLogin = action.payload.isLogin
         localStorage.setItem('user', JSON.stringify(action.payload))
      },
      onLogOut: (state) => {
         state.isLogin = false
         localStorage.removeItem('user')
      }
   }
})
export const { setIsLogin, onLogOut } = authSlice.actions
export default authSlice.reducer
