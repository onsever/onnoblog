import React from 'react';
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import PostList from "../../components/postlist/PostList";
import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <PostList />
                <SideBar />
            </div>
        </>
    );
};

export default Home;
