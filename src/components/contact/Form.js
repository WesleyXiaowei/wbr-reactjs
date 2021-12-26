import Input from "../form/Input"
import SubmitForm from "./SubmitForm"
import styles from "./Form.module.css"

function Form({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
            type="name" 
            placeholder="Nome"
            text="Nome"
            name="name" />
            <Input 
            type="email" 
            placeholder="Email"
            text="Email"
            name="email" />
            <Input 
            type="tel" 
            placeholder="Tel"
            text="Celular"
            name="number" />
            <Input className={styles.form_text}
            type="text" 
            placeholder="Mensagem"
            name="text"
            text="Digite a sua mensagem" />
            <SubmitForm text={btnText}/>
        </form>
    )
}

export default Form