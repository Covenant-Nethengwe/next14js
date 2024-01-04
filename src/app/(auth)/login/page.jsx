import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {

  return (
    <section className={ styles.container }>
      <aside className={ styles.wrapper }>
        <form action={ handleGithubLogin }>
          <button className={ styles.github }>Login With Github</button>
        </form>
        <LoginForm />
      </aside>
    </section>
  )
}

export default Login;