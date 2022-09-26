import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import PostList from "../../components/postlist/PostList";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/posts");
            setPosts(response.data);
        }

        fetchData();

    }, [search]);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <PostList posts={posts} />
                <SideBar />
            </div>
        </>
    );
};

export default Home;
