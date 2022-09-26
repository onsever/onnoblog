import React from 'react';
import styles from "./BlogPost.module.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const BlogPost = () => {
    return (
        <article className={styles.post}>
            <div className={styles["post-img"]}>
                <img
                    src="https://source.unsplash.com/600x400/?computer"
                    alt="Image"
                    className={styles.img}
                />
            </div>
            <div className={styles["post-categories"]}>
                <span className={styles["post-category"]}>Technology</span>
                <span className={styles["post-category"]}>Life</span>
            </div>
            <h1 className={styles["post-title"]}>
                Lorem ipsum dolor sit amet.
                <div className={styles["post-icons"]}>
                    <RiEdit2Line className={styles["post-edit-icon"]} />
                    <RiDeleteBin6Line className={styles["post-delete-icon"]} />
                </div>
            </h1>
            <div className={styles["post-info"]}>
                <span className={styles["post-author"]}>Author: <b>Onurcan</b></span>
                <span className={styles["post-date"]}>1 hour ago</span>
            </div>
            <p className={styles["post-content"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis commodi, delectus dolor eum fugit hic iusto laborum libero modi mollitia necessitatibus perspiciatis praesentium qui recusandae repellendus repudiandae sequi, sit soluta veniam voluptas voluptatibus voluptatum. Laboriosam maiores maxime praesentium tenetur? Alias aliquid assumenda at autem ducimus iure magni nobis quae qui ratione saepe sit ut vel, voluptates voluptatum. Adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cumque explicabo id sint? Accusamus accusantium ad aut beatae consequuntur corporis delectus deleniti dolor ea enim esse est eum eveniet ex excepturi harum incidunt inventore iure laboriosam magni modi obcaecati possimus quia quibusdam quos sapiente sequi suscipit tenetur, veniam vero! Dolores enim id ipsam iste minus nemo numquam veniam voluptatem!</p>
        </article>
    );
};

export default BlogPost;
