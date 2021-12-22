import LinkButton from "../layout/LinkButton"
import styles from "./Home.module.css"

function Home() {
    return (
        <section className={styles.container}>
            <h1>BEM-VINDO A <span>WBR</span></h1>
            <p>A MAIOR PLATAFORMA ONLINE GRATUÍTA PARA O APRENDIZADO DE MANDARIM!</p>
            <LinkButton to="/services" text="Serviços"/>
        </section>
    )
}

export default Home