import React, { useEffect, useState } from 'react';
import styles from "./BlogPost.module.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
    const [post, setPost] = useState({});
    const params = useParams();
    const postId = params.postId;

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`/posts/${postId}`);
            setPost(response.data);
        }

        fetchPost();

    }, [postId]);

    return (
        <article className={styles.post}>
            <div className={styles["post-img"]}>
                {post.postImg && (
                    <img
                        src={post.postImg}
                        alt="Image"
                        className={styles.img}
                    />
                )}
            </div>
            <div className={styles["post-categories"]}>

            </div>
            <h1 className={styles["post-title"]}>
                {post.title}
                <div className={styles["post-icons"]}>
                    <RiEdit2Line className={styles["post-edit-icon"]} />
                    <RiDeleteBin6Line className={styles["post-delete-icon"]} />
                </div>
            </h1>
            <div className={styles["post-info"]}>
                <span className={styles["post-author"]}>Author: <Link to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                <span className={styles["post-date"]}>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className={styles["post-content"]}>{post.desc}</p>
        </article>
    );
};

export default BlogPost;

/*
{post.categories.map((category) => {
                    return <span className={styles["post-category"]}>{category.name}</span>
                })}
 */