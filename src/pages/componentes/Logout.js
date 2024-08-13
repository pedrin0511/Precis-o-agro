import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from './logout.module.css'
import { MdOutlineLogout } from "react-icons/md";
function LogoutButton(){
    const navigate = useNavigate()
    const auth = getAuth()

    const logout = () =>{
        signOut(auth).then(()=>{
            navigate("/")
        }).catch((error) => alert(error))
    }

    return(
        <div className={styles.sair}>
        <button onClick={logout}><MdOutlineLogout />Sair</button></div>
    )
}

export default LogoutButton