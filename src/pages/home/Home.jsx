import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import PostList from "../../components/postlist/PostList";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/posts");
            console.log(response);
        }

        fetchData();

    }, []);

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
