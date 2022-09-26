import React from 'react';
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <section className={styles["sidebar-section"]}>
                <span className={styles["sidebar-title"]}>About Me</span>
                <img
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profile Image"
                    className={styles["sidebar-image"]}
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis corporis eos eum, exercitationem fugiat, ipsum, iure modi nam numquam optio.</p>
            </section>
            <section className={styles["sidebar-section"]}>
                <span className={styles["sidebar-title"]}>Categories</span>
                <ul className={styles["sidebar-list"]}>
                    <li className={styles["sidebar-item"]}>Life</li>
                    <li className={styles["sidebar-item"]}>Music</li>
                    <li className={styles["sidebar-item"]}>Style</li>
                    <li className={styles["sidebar-item"]}>Sport</li>
                    <li className={styles["sidebar-item"]}>Tech</li>
                    <li className={styles["sidebar-item"]}>Cinema</li>
                </ul>
            </section>
            <section className={styles["sidebar-section"]}>
                <span className={styles["sidebar-title"]}>Follow Us</span>
            </section>
        </aside>
    );
};

export default SideBar;
