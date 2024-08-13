
import styles from './Graos.module.css'
function Graos(){
   
    return(
        <div className={styles.container}>
            <h2>Cotações</h2>
            <ul>
                <li><a href="https://www.noticiasagricolas.com.br/cotacoes/soja">SOJA</a></li>
                <li><a href="https://www.noticiasagricolas.com.br/cotacoes/trigo">TRIGO</a></li>
                <li><a href="https://www.noticiasagricolas.com.br/cotacoes/milho">MILHO</a></li>
                <li><a href="https://www.noticiasagricolas.com.br/cotacoes/arroz">ARROZ</a></li>
            </ul>
        </div>
        
    )
}

export default Graos