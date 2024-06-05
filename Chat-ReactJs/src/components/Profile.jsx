import React, { useState } from 'react';
import '/src/Chat.css';
import { useLocation } from 'react-router-dom';


export function Profile() {
    const location = useLocation();
    const { username } = location.state || { username: 'Usuário Desconhecido' };

    const [messages, setMessages] = useState([
      { type: 'atendente', content: `Olá, ${username}! Como posso ajudar você?` },
    ]);
    const [inputValue, setInputValue] = useState('');
  
    function sendMessage() {
      if (inputValue.trim() === '') return;
  
      setMessages([
        ...messages,
        { type: 'cliente', content: inputValue },
        { type: 'atendente', content: 'Aguardando resposta...' },
      ]);
      setInputValue('');
    }
  

  return (
    <div className="chat-container">
      <div className="header">
        <h2>Atendimento ao Cliente</h2>
      </div>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`dialog ${message.type === 'atendente' ? 'atendente' : 'cliente'}`}
          >
            <div className={`message ${message.type === 'atendente' ? 'msg-atend' : 'msg-cliente'}`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite sua mensagem..."
          id="message-input"
        />
        <button className="button-msg" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}
