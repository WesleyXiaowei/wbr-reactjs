import Form from "../contact/Form"
import styles from "./Contact.module.css"

function Contact() {
    return (
        <div className={styles.contact_container}>
            <h1>Contato</h1>
            <p>Preencha os dados abaixo e retornaremos brevemente!</p>
            <Form btnText="Criar Projeto"/>
        </div>
    )
}

export default Contact