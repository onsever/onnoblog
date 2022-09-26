import React from 'react';
import styles from "./PostDetails.module.css";
import SideBar from "../../components/sidebar/SideBar";
import BlogPost from "../../components/blogpost/BlogPost";

const PostDetails = () => {
    return (
        <div className={styles.container}>
            <BlogPost />
            <SideBar />
        </div>
    );
};

export default PostDetails;
