import React, { useContext } from 'react'
import "../Styling/Navbar.css"
import { ContextProvide } from './Context'

const Navbar = () => {
    const {user,loader,Register,Logout}=useContext(ContextProvide)
    const UserLogin = () => {
        Register()
    }
    const UserLogout = () => {
        Logout()
    }
    const User = () =>{
        return loader ? (
            user ? ( <div className="ImgandBtn">
                  <div className="img">
                      <img className='profile' src={user.photoURL}  alt="" />
                  </div>
                  <div className="btn">
                      <button onClick={UserLogout}>Logout</button>
                  </div>
                  </div>) : (
                    <div className="ImgandBtn">
                  <div className="img">
                      <img className='profile' src=""  alt="" />
                  </div>
                  <div className="btn">
                      <button onClick={UserLogin}>Login</button>
                  </div>
                  </div>  
              )):("Loading...")
    }
  return (
      <>
          <div className="top">
              <div className="Text">
                 <h1>Messenger</h1> 
              </div>
              {
                  User()
             }
          </div>
    </>
  )
}

export default Navbar