import React from 'react'
import { ContextProvider } from './ContextProvider'
import InputData from './InputData'
const Message = () => {
    const {user, setMessages}=React.useContext(ContextProvider)
  return (
      <>
          <div className="Body">
                  {
                    setMessages.map(messg => 
                       messg.email === user.email ? (
                        <div className="My__messages" key={messg.id}>
                              <p>{messg.msg}</p>
                          </div>
                      ) : (
                        <div className="others__messsages" key={messg.id}>
                              <img src={messg.photo} alt={messg.photo} />
                                  <div className="others__messagesbox">
                                      <span>{messg.username}</span>
                                  <p>{messg.msg}</p>
                              </div>
                          </div>
                         )
                  )
                  }
          </div>
          <div className="bottom">
              <InputData/>
          </div>
    </>
  )
}

export default Message