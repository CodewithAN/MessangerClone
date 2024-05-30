import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import "../Styling/MessigingInput.css"
import { useContext } from 'react';
import { ContextProvide } from './Context';
const MessigingInput = () => {
    const {allMessages}=useContext(ContextProvide)
    const [message,setMessage]=useState("")
    const InputHandler = (event) => {
        setMessage(event.target.value)
    }
    const SentMessage = (e) => {
        e.preventDefault()
        allMessages(message)
        setMessage("")
    }
  return (
      <>
              <form>
          <div className="MessegingInput">
              <div className="inputtag">
                  <input type="text" placeholder='Write your message..'
                        value={message} onChange={InputHandler}
                  />
              </div>
              <div className="SendBtn">
                  <button onClick={SentMessage} ><SendIcon/></button>
                  </div>
          </div>
                  </form>
    </>
  )
}

export default MessigingInput