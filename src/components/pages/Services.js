import styles from './Services.module.css'
import { FaSketch, FaDraftingCompass, FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import baby from '../../img/services/chinese-baby.jpg'

function Services() {
    return (
        <div className={styles.services}>
            <h2>Conheça os nossos serviços</h2>
            <p>Bem-vindo a WBR, a primeira e mais completa plataforma de ensino de Mandarim gratuíto do Brasil!</p>
            <img src={baby}></img>
            <hr></hr>
            <ul className={styles.grid}>
                <Link to="courses" className={styles.link}>
                    <li>
                        <FaSketch className={styles.svg}/>
                        <h4>Material audio-visual</h4>
                        <p>Aulas exclusívas de Mandarim desde básico até o avançado</p>        
                    </li>
                </Link>
                <Link to="books" className={styles.link}>
                    <li>
                        <FaDraftingCompass className={styles.svg}/>
                        <h4>Tradução de conteúdo em Português</h4>
                        <p>Acompanhe a nossa apostila de conteúdo totalmente em Português</p>
                    </li>
                </Link>
                <Link to="tests" className={styles.link}>
                    <li>
                        <FaTools className={styles.svg}/>
                        <h4>Simulados do HSK e HSKK (Teste de Proficiência em Chinês)</h4>
                        <p>Faça simulados online e prepare-se para os testes de Proficiência</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Services