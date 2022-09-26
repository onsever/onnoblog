import React from 'react';
import styles from "./SearchBar.module.css";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
    return (
        <form className={styles.search}>
            <label>
                <input
                    type="text"
                    placeholder="Search for posts..."
                />
            </label>
            <div className={styles.icon}>
                <RiSearchLine />
            </div>
        </form>
    );
};

export default SearchBar;
