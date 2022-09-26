import React, { useState } from 'react';
import styles from "./NewPost.module.css";
import { RiAddCircleFill } from "react-icons/ri"

const NewPost = () => {
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskDetails, setTaskDetails] = useState("");

    return (
        <div className={styles.holder}>
            <img src="https://source.unsplash.com/600x400/?computer" alt="Image"/>
            <form className={styles.form}>
                <label>
                    <RiAddCircleFill className={styles.icon} />
                    <input type="file" className={styles["file-input"]}/>
                </label>
                <h2>Publish a New Post</h2>
                <div className={styles.divider} />
                <label className={styles["content-label"]}>
                    <span>Post Title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTaskName(e.target.value)}
                        value={taskName}
                        maxLength="20"
                        placeholder="Title"
                        required />
                </label>
                <label className={styles["content-label"]}>
                    <span>Post Category:</span>
                    <input
                        type="text"
                        onChange={(e) => setTaskCategory(e.target.value)}
                        value={taskCategory}
                        maxLength="12"
                        placeholder="Category"
                        required />
                </label>
                <label className={styles["content-label"]}>
                    <span>Post Details:</span>
                    <textarea
                        onChange={(e) => setTaskDetails(e.target.value)}
                        value={taskDetails}
                        placeholder="Write about anything..."
                        required />
                </label>
                <div className={styles["btn-container"]}>
                    <button className={styles.btn}>Publish</button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;
