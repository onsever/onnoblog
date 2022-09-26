import React from 'react';
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { RiAddCircleFill } from "react-icons/ri";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header-image"]}>
                <Link to="/newpost"><RiAddCircleFill className={styles.icon} /></Link>
            </div>
        </header>
    );
};

export default Header;
