import RegisterForm from "@/components/registerForm/registerForm";
import styles from "./register.module.css";

const Register = () => {
  return (
    <section className={ styles.container }>
      <aside className={ styles.wrapper }>
        <RegisterForm />
      </aside>
    </section>
  )
}

export default Register;