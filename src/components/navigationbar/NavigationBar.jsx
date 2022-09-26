import React from 'react';
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { IoMdLogOut } from "react-icons/io"
import SearchBar from "../searchbar/SearchBar";

const NavigationBar = () => {
    const isUserLoggedIn = false;

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <h1><Link to="/" className={styles.title}>OnnoBlog</Link></h1>
                <SearchBar />
                <div className={styles.profile}>
                    {
                        isUserLoggedIn ? (
                            <img
                                src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg"
                                alt="Profile Image"
                                className={styles["profile-img"]}
                            />
                        ) : (
                            <>
                                <ul className={styles["nav-links"]}>
                                    <li className={styles["link-item"]}><Link to="/login">Login</Link></li>
                                    <li className={styles["link-item"]}><Link to="/signup">Sign Up</Link></li>
                                </ul>
                            </>
                        )
                    }
                    {isUserLoggedIn && (
                        <div className={styles.logout}>
                            <IoMdLogOut className={styles.icon} />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;