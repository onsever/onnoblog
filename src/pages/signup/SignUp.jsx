import React from 'react';
import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.holder}>
                <form className={styles.form}>
                    <h1>Sign Up</h1>
                    <label>
                        <span>Username:</span>
                        <input
                            type="text"
                            placeholder="username"
                        />
                    </label>
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
                    <button type="submit" className={styles.btn}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
