import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import style from './Log.module.css'
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);
    const navigate = useNavigate()
    const [input, setinput] = useState(style.inputE);
    const [label, setlabel] = useState(style.labelE);
    const [type, settype] = useState('password')
    const [olhar,setolhar] = useState(false)
    

    const Login = (e) => {
        e.preventDefault()

        const auth = getAuth()

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user
            navigate("/home")
        })
        .catch((error) => {
            setMessage(true)
            setinput(style.inputF)
            setlabel(style.labelF)

            setTimeout(() => {
                setMessage(false)
                setinput(style.inputE)
                setlabel(style.labelN)
            }, 3000);
            
        })
        

    }

    function verSenha(e){
        e.preventDefault()
    
        
    
        if( type === 'password'){
            settype('text')
            setolhar(true)
            
        }else{
            settype('password')
            setolhar(false)
        }
    }

    return(
        <div className={style.body} >
            <div className={style.container}>
               
                <form onSubmit={Login}>
                <h1>Login</h1>
                <div>
                   <label className={label}>E-mail:</label>
                <input className={input}
                 type="email"
                 placeholder="Digite seu email"
                 value={email}
                 required
                 onChange={(e) => setEmail(e.target.value)}
                 /> 
                </div>
                
                
                <div>
                   <label className={label}>Senha:</label>
                   <input className={input}
                    type={type}
                    placeholder="Digite sua senha"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)
                    }
                    /> 
                     {!olhar ? ( <button className={style.verSenha} onClick={verSenha}><IoIosEyeOff /></button>) : ( <button className={style.verSenha} onClick={verSenha}><IoIosEye /></button>)}
                     {message ? (<p className={style.message}>Erro ao concluir Login</p>) : (<p></p>)}
                </div>
                <div className={style.container_button}>
                    <button type="submit">logar</button>
                </div>
                
            </form>
            </div>
            
            
            <p >Caso não tenha uma conta <Link to="/register">Registre-se!</Link></p>
        </div>
    )
}

export default Login