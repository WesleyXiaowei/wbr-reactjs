import styles from './Services.module.css'
import { FaSketch, FaDraftingCompass, FaTools } from 'react-icons/fa'

function Services() {
    return (
        <div className={styles.services}>
            <h2>Conheça os nossos serviços</h2>
            <p>Bem-vindo a WBR, a primeira e mais completa plataforma de ensino de Mandarim gratuíto do Brasil!</p>
            <hr></hr>
            <ul className={styles.grid}>
                <li>
                    <FaSketch className={styles.svg}/>
                    <h4>Material audio-visual</h4>
                    <p>Aulas exclusívas de Mandarim desde básico até o avançado</p>
                </li>
                <li>
                    <FaDraftingCompass className={styles.svg}/>
                    <h4>Tradução de conteúdo em Português</h4>
                    <p>Acompanhe a nossa apostila de conteúdo totalmente em Português</p>
                </li>
                <li>
                    <FaTools className={styles.svg}/>
                    <h4>Simulados do HSK e HSKK (Teste de Proficiência em Chinês)</h4>
                    <p>Faça simulados online e prepare-se para os testes de Proficiência</p>
                </li>
            </ul>
        </div>
    )
}

export default Services