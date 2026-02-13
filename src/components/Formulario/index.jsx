import { useState } from 'react'
import styles from './FormsImc.module.css'

const FormsImc = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const imcCalculado = peso > 0 && altura > 0 ? (peso / (altura * altura)) : 0;

    const getClassificacao = () => {
        if (imcCalculado < 18.5) return "Abaixo do peso";
        if (imcCalculado < 24.9) return "Peso normal";
        if (imcCalculado < 29.9) return "Sobrepeso";
        if (imcCalculado < 34.9) return "Obesidade grau I";
        if (imcCalculado < 39.9) return "Obesidade grau II";
        return "Obesidade grau III"
    }

    return (
        <div className="container">
            <form className={styles.form}>
                <div className={styles.containerInput}>
                    <input className={styles.inputs} type="number" placeholder="Peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <input className={styles.inputs} type="number" placeholder="Altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                </div>
                {imcCalculado > 0 && altura > 1 && (
                    <div>
                        <p className={styles.resultado}>Seu índice de massa corporal é:</p>
                        <p className={styles.resultado}>{imcCalculado.toFixed(2)} kg/m²</p>
                        <p className={styles.classificacao}>Classificação: {getClassificacao()}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default FormsImc