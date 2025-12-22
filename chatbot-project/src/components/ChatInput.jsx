import {useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'
  function ChatInput({chatMessages, setChatMessages}){
        const [inputText, setInputText] = useState('');

        function inputSavedText(event){
           setInputText(event.target.value);
        }

        function sendMessage(){
           const newChatMessages = 
            [
              ... chatMessages, //spread operator used to take values of an array and copy them into a new array
              {
                message: inputText,
                sender : 'user',
                id: crypto.randomUUID() //random string generator for ID's
              }
            ];

            setChatMessages(newChatMessages);

            const response = Chatbot.getResponse(inputText);
            setChatMessages(
              [
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ] 
            )
            setInputText('');
        }
         return (
            <div className='chat-input-container'>
                 <input 
                  placeholder="Ask Chatbot"  
                  size="30" 
                  onChange = {inputSavedText}
                  value = {inputText}
                  className='input-bar'
                 />
                 <button className='send-button' onClick= {sendMessage}>Send</button>
            </div>
          );
      }


      export default ChatInput