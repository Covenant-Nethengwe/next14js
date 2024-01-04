"use client"

import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = ({}) => {

  const [ state, formAction ] = useFormState(login, undefined);

  const router = useRouter();
  
  // console.log("this is the state", state);
  // useEffect(() => {
  //   state?.success && router.push("/login")
  // }, [state?.success, router])

  return (
    <form className={ styles.form } action={ formAction }>
      <input className={ styles.input } type="text" name="username" id="" placeholder="username"/>
      <input className={ styles.input } type="password" name="password" id="" placeholder="password"/>
      <button>Login</button>
      { state?.error }
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm;