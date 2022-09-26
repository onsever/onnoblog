import React from 'react';
import styles from "./PostList.module.css";
import SinglePost from "../singlepost/SinglePost";

const PostList = () => {
    return (
        <main className={styles.main}>
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </main>
    );
};

export default PostList;
