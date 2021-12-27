import { FaGithub, FaInstagram } from 'react-icons/fa'
import styles from './AboutUs.module.css'
import wesley from '../../img/about-us/wesley-img.jpg'

function AboutUs() {
    return (
        <div id={styles.container}>
            <h1>Sobre nós</h1>
            <h4>Wesley B. Rocha</h4>
            <img src={wesley} alt='wesley-img'></img>
            <p>Software Engineer e Línguista. CEO e criador da WBR (Web Brazilian Resource)</p>
            <ul className={styles.list}>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
        </div>
    )
}

export default AboutUs