import Dolar from "../componentes/Cotaçoes/Dolar"
import LogoutButton from "../componentes/Logout"
import styles from './Navbar.module.css'
function Navbar(){
    return(
        <header className={styles.container}>
            <nav>
                <img src="https://www.zarla.com/images/zarla-agrocampo-1x1-2400x2400-20220111-qqr3wfphqmxtdq88dxv9.png?crop=1:1,smart&width=250&dpr=2" alt="logo"/>
                <Dolar/>
                <LogoutButton/>
            </nav>
        </header>
    )
}

export default Navbar