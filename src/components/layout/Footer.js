import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>
                    <FaFacebook />
                </li>
                <li className={styles.itens}>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>WBR</span> &copy; 2024 - Todos os direitos reservados
            </p>
        </footer>
    )
}

export default Footer