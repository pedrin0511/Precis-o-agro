import { Link ,useNavigate } from "react-router-dom"
import { db } from "../../FirebaseConfig"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import style from '../login/Log.module.css'
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
function Register() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();
    const [input, setinput] = useState(style.inputE);
    const [label, setlabel] = useState(style.labelE);
    const [type, settype] = useState('password')
    const [olhar,setolhar] = useState(false)
const Registro = (e) =>{
    e.preventDefault()

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) =>{
        const user = userCredential.user
        alert("usuario logado")
        navigate("/home")
    })
    .catch((error) => alert(error))
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
        <div className={style.body}>
            <div className={style.container}>
            <form onSubmit={Registro}>
                <h1>REGISTRO</h1>
                <div>
                   <label className={label}>E-mail:</label>
                <input  className={input}
                 type="email"
                 placeholder="Digite seu email"
                 value={email}
                 required
                 onChange={(e) => setEmail(e.target.value)}
                 /> 
                </div>
                
                
                <div>
                   <label className={label}>Senha:</label>
                   <input  className={input}
                    type={type}
                    placeholder="Digite sua senha"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)
                    
                    }
                    /> 
                    {!olhar ? ( <button className={style.verSenha} onClick={verSenha}><IoIosEyeOff /></button>) : ( <button className={style.verSenha} onClick={verSenha}><IoIosEye /></button>)}
                   
                </div>
                <div className={style.container_button}>
                    <button type="submit">Registrar</button>
                </div>
                
            </form>
            </div>
            
            <p>Caso já possua uma conta faça <Link to="/">Login</Link></p>
        </div>
    )
}

export default Register