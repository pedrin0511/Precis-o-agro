import React, { useState} from 'react';
import style from './Chat.module.css'

function Chat() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contador, setContador] = useState(0)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isSubmitting) return; // Evita múltiplas submissões rápidas
    setIsSubmitting(true);

   
    const newMessage = { role: 'user', content: userInput };
    
    
    setChatHistory(prevChatHistory => [...prevChatHistory , newMessage]);


     
    // Limpa o input do usuário
    setUserInput('');

    setContador(prevContador => prevContador + 1)

    // Libera o botão de enviar após um tempo
    setTimeout(() => setIsSubmitting(false), 1500); // 5 segundos
    setTimeout(()=>{
      MensagemIA(contador + 1)
    }, 1000)
    
  };

  function MensagemIA(contador){
    let content
    if (contador === 1) {
      content = "$5 para usar"
    }else if (contador === 2) {
      content = "Precisa de $5 para usar cara";
    } else if (contador === 3) {
      content = "deixa de ser pão duro";
    } else {
      content = "Desisto!";
    }

    const newMessageia ={role: "IA" , content}

    setChatHistory(prevChatHistory =>[...prevChatHistory,newMessageia])
  }

 
  return (
    <div className={style.container}>
      <h2>Chat com IA</h2>
      <div className={style.chat}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{msg.role === 'user' ? 'Você: ' : 'IA: '}</strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Faça sua pergunta..."
          
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Enviar</button>
      </form>
    </div>
  );
}

export default Chat;