import { useState } from 'react'
import './App.css'
import  ChatInput from './components/ChatInput'
import  ChatMessages from './components/ChatMessages'
    
  
  function App(){
           const array = useState([
           {
            message: 'Hey! I am Chatbot, ask me anything!',
            sender : 'robot',
            id: crypto.randomUUID(),
          }
        ]) 
        const [chatMessages, setChatMessages] = array;
        //save current data and function that updates data into chatMessages array and setChatMessages as a function. 
            
          return (
            <div className="app-container">
  
             <ChatMessages chatMessages={chatMessages} />
             <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
            </div>
          )
      }


export default App
