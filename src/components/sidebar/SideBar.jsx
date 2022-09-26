import React, { useState, useEffect } from 'react';
import styles from "./SideBar.module.css";
import axios from "axios";
import {Link} from "react-router-dom";

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("/categories");
            setCategories(response.data);
        };

        fetchCategories();

    }, []);

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
                    {categories.map((category) => {
                        return <Link to={`/?cat=${category.name}`} className={styles.link}>
                            <li key={category.name} className={styles["sidebar-item"]}>{category.name}</li>
                        </Link>
                    })}
                </ul>
            </section>
            <section className={styles["sidebar-section"]}>
                <span className={styles["sidebar-title"]}>Follow Us</span>
            </section>
        </aside>
    );
};

export default SideBar;
