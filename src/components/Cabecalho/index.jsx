import styles from "./Cabecalho.module.css"

const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.titles}>Tarefa React</h1>
                <h3 className={styles.titles}>Calculadora de IMC</h3>
            </header>
        </div>
    )
}

export default Header