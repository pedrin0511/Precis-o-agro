import { useState, useEffect } from "react"
import styles from './Dolar.module.css'
function Dolar(){
     const[dolar, setDolar] = useState(null)


useEffect(() => {
    setInterval(() => {
        cotaçaoDolar() 
     }, 2000);
},[])


async function cotaçaoDolar() {
    try {
        const resposta =await fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        const dados = await resposta.json()
        const Moeda = parseFloat(dados.USDBRL.bid).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL',
            minimumFractionDigits:2,
            maximumFractionDigits:2,
        })
        setDolar(Moeda)
    } catch (error) {
        console.error(error)
    }
}


    return(
        <div className={styles.dolar}>
            <p>Dolar</p>
           <span>{dolar}</span> 
        </div>
        
    )
}

export default Dolar