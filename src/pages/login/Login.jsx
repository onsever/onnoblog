import React from 'react';
import styles from "./Login.module.css";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.holder}>
                <form className={styles.form}>
                    <h1>Login</h1>
                    <label>
                        <span>Email:</span>
                        <input
                            type="text"
                            placeholder="username@domain.com"
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            placeholder="**********"
                        />
                    </label>
                    <div className={styles["btn-container"]}>
                        <button type="submit" className={styles.btn}>Login</button>
                        <Link to="/signup" className={`${styles.btn} ${styles.signup}`}>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
