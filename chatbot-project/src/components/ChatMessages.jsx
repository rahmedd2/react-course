    import {useEffect, useRef} from 'react'
    import { ChatMessage } from './ChatMessage'
    import './ChatMessages.css'
     function ChatMessages({chatMessages}){

        const chatMessagesRef = useRef(null);

          useEffect(()=>{
          const containerElem= chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop= containerElem.scrollHeight;
          }
        },[chatMessages]);
        const chatMessageComponents=chatMessages.map((chatMessage)=>{
        return(
            <ChatMessage 
               message = {chatMessage.message}
               sender = {chatMessage.sender}
               key = {chatMessage.id}
               />
            
            )
          })
          
          return(
           <div className="chat-message-container" ref={chatMessagesRef}>
              {chatMessageComponents}
            </div>
          )
      }

  
      export default ChatMessages