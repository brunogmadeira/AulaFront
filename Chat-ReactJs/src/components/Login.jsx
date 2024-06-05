import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/Login.css';


export function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/profile', { state: {username}});
  }  

  return (
    <div className="login">
      <h2>Login</h2>
      <input 
        type='text' 
        placeholder='Nome de usuário' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="input"
      />
      <br />
      <button className="button" onClick={handleLogin}>Entrar</button>
    </div>
  );
}
