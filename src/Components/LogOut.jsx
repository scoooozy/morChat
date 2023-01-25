import React from 'react'
import {auth} from '../firebase'
const style = {
    logout:` bg-gray-300 px-4 py-2 hover:bg-gray-100`
}


const Logout = () => {
    const signOut = () => {
        signOut(auth)
        
    }
  return (
    <button className={style.logout} onClick={() => auth.signOut()}>
        logout
    </button>
  )
}

export default Logout