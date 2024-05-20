import React from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <form className={styles.form}>
                <label htmlFor="username" className={styles.label}>Nome de usuário</label>
                <input type="text" id="username" className={styles.input} />

                <label htmlFor="password" className={styles.label}>Senha</label>
                <input type="password" id="password" className={styles.input} />

                <button type="submit" className={styles.button}>Entrar</button>
            </form>
        </div>
    );
}
