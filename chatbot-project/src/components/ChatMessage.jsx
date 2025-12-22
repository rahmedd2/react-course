import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user_pfp.png'
import './ChatMessage.css'

export function ChatMessage({sender, message}){
           return ( 
           <div className={
             sender==="robot" 
             ? "robot-chat" 
             : "user-chat"
            }>
             {sender=== "robot" &&  <img src= {RobotImage} className='chat-message-profile' />} 
             <div className = {sender==="robot" ? "robot-text" : 'user-text'}>
             {message}
             </div>
             {sender === "user" && <img src= {UserImage} className='chat-message-profile' />}       
           </div>
         )
      }