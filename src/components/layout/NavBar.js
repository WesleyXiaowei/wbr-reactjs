import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/logo/wbr-logo.jpg'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="logo" className={styles.logo}></img>
            </Link>
            <ul className={styles.list}>
                <li className={styles.itens}>
                    <Link to="/" className={styles.link}>Início</Link>
                </li>
                <li className={styles.itens}>
                    <Link to="/services" className={styles.link}>Serviços</Link>
                </li>
                <li className={styles.itens}>
                    <Link to="/about-us" className={styles.link}>Sobre nós</Link>
                </li>
                <li className={styles.itens}>
                    <Link to="/contact" className={styles.link}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar