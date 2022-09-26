import React from 'react';
import styles from "./SinglePost.module.css";

const SinglePost = () => {
    return (
        <article className={styles["card-container"]}>
            <div className={styles.card}>
                <div className={styles["card-header"]}>
                    <img
                        src="https://source.unsplash.com/600x400/?computer"
                        alt="Image"
                    />
                </div>
                <div className={styles["card-body"]}>
                    <span className={styles["card-tag"]}>Technology</span>
                    <h4>What's new in 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad debitis deleniti eligendi eos esse facere fuga ipsam magnam nostrum nulla quaerat quisquam reprehenderit rerum, sed veritatis voluptas voluptate voluptatum!</p>
                </div>
                <div className={styles["card-footer"]}>
                    <div className={styles["author-image"]}>
                        <img
                            src="https://i.pravatar.cc/40?img=1"
                            alt="User Profile Image"
                        />
                        <div className={styles["author-info"]}>
                            <h5>Jane Doe</h5>
                            <small>2h ago</small>
                        </div>
                    </div>
                    <button className={styles["card-btn"]}>Read more...</button>
                </div>
            </div>
        </article>
    );
};

export default SinglePost;
