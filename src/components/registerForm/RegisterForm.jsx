"use client"

import { register } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = ({}) => {

  const [ state, formAction ] = useFormState(register, undefined);

  const router = useRouter();
  
  console.log("this is the state", state);
  useEffect(() => {
    state?.success && router.push("/login")
  }, [state?.success, router])

  return (
    <form className={ styles.form } action={ formAction }>
      <input className={ styles.input } type="text" name="username" id="" placeholder="username"/>
      <input className={ styles.input } type="email" name="email" id="" placeholder="email"/>
      <input className={ styles.input } type="password" name="password" id="" placeholder="password"/>
      <input className={ styles.input } type="password" name="confirmPassword" id="" placeholder="confirm password"/>
      <button>Register</button>
      { state?.error }
      <Link href="/login">
        Have and account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm;