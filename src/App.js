import './App.css'
import Router from 'router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIsLogin } from 'store/action/authSlice'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      let user = localStorage.getItem('user')
      if (user) {
         let userObj = JSON.parse(user)
         dispatch(setIsLogin(userObj))
      }
      return () => {}
   }, [])

   return (
      <div>
         <Router />
      </div>
   )
}

export default App
