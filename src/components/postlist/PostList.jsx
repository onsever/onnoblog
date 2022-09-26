import React from 'react';
import styles from "./PostList.module.css";
import SinglePost from "../singlepost/SinglePost";

const PostList = ({ posts }) => {
    return (
        <main className={styles.main}>
            {posts.map((post) => {
                return <SinglePost key={post._id} post={post} />
            })}
        </main>
    );
};

export default PostList;
