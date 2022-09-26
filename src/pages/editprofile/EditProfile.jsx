import React from 'react';
import styles from "./EditProfile.module.css";
import SideBar from "../../components/sidebar/SideBar";
import { RiImage2Line } from "react-icons/ri";

const EditProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles["profile-container"]}>
                <h2>Update Your Account</h2>
                <form className={styles["profile-update"]}>
                    <div className={styles["profile-image"]}>
                        <img src="https://i.pravatar.cc/40?img=1" alt="User Profile Image"/>
                        <label>
                            <RiImage2Line className={styles["profile-image-update-icon"]} />
                            <input type="file" className={styles["profile-image-update"]}/>
                        </label>
                    </div>
                    <div className={styles["profile-info"]}>
                        <label>
                            <span>Username:</span>
                            <input
                                type="text"
                            />
                        </label>
                        <label>
                            <span>Email Address:</span>
                            <input
                                type="email"
                            />
                        </label>
                        <label>
                            <span>Password:</span>
                            <input
                                type="password"
                            />
                        </label>
                    </div>
                    <button className={styles.btn}>Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
};

export default EditProfile;
