import styles from "@/app/ui/login/login.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
        </div>
    </div>
  )
}

export default Login