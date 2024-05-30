import React from 'react'
import "../Styling/Body.css"
import { ContextProvide } from './Context'
import MessigingInput from './MessigingInput'
const Body = () => {
  const {user, Messages }=React.useContext(ContextProvide)
  return (
      <>
          <div className="body">
          {
          Messages.map((messg) =>messg.email === user.email ? (
                <div className="My__messages" key={messg.id}>
                <p>{messg.data.data}</p>
                </div>
              ) : (
                <div className="others__messsages" key={messg.id}>
                      <div className="others__messagesImg">
                  <img src={messg.data.photo} alt={messg.photo} />
                  </div>
                  <div className="others__messagesbox">
                    <span>{messg.data.username}</span>
                    <p>{messg.data.data}</p>
                  </div>
                </div>
              )
            )
          }
      </div>
      <MessigingInput/>
    </>
  )
}

export default Body