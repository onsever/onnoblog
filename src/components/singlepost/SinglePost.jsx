import React from 'react';
import styles from "./SinglePost.module.css";
import {Link} from "react-router-dom";

const SinglePost = ({ post }) => {
    return (
        <article className={styles["card-container"]}>
            <div className={styles.card}>
                <div className={styles["card-header"]}>
                    {post.photo && (
                        <img
                            src={post.postImg}
                            alt="Image"
                        />
                    )}
                </div>
                <div className={styles["card-body"]}>
                    <div className={styles["card-sub"]}>
                        {post.categories.map((category) => {
                            return <span className={styles["card-tag"]}>{category.name}</span>
                        })}
                    </div>
                    <h4><Link to={`/post/${post._id}`} className={styles.link}>{post.title}</Link></h4>
                    <p>{post.desc}</p>
                </div>
                <div className={styles["card-footer"]}>
                    <div className={styles["author-image"]}>
                        <img
                            src="https://i.pravatar.cc/40?img=1"
                            alt="User Profile Image"
                        />
                        <div className={styles["author-info"]}>
                            <h5>{post.username}</h5>
                            <small>{new Date(post.createdAt).toDateString()}</small>
                        </div>
                    </div>
                    <button className={styles["card-btn"]}>Read more...</button>
                </div>
            </div>
        </article>
    );
};

export default SinglePost;
