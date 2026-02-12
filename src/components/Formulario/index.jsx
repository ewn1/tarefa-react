import { useState } from 'react'
import styles from './FormsImc.module.css'

const FormsImc = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    
    const renderizaResultado = () => {
        if (peso > 0 && altura > 0) {
            const imc = peso / (altura * altura);
            return imc.toFixed(2);
        }
        return "";
    }

    return (
        <div className="container">
            <form className={styles.form}>
                <div className={styles.containerInput}>
                    <input className={styles.inputs} type="number" placeholder="Peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <input className={styles.inputs} type="number" placeholder="Altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                </div>
                <p>Seu índice de massa corporal é:</p>
                <p className={styles.resultado}>{renderizaResultado() !== "" && altura > 1 ? `${renderizaResultado()} kg/m²` : ""}</p>
            </form>
        </div>
    )

}

export default FormsImc