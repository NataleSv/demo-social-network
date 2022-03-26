import React from 'react';
import styles from "./Users.module.css";
import UserImg from "../../assets/images/userImg.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";



let User = ({user, followingInProgress, unfollow, follow}) => {


    return (
        <div>
            <div>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : UserImg } className={styles.avatar}/>
                            </NavLink>

                        </div>
                        <div>
                            { user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {unfollow(user.id)}}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {follow(user.id)}}>Follow</button>
                            }

                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
)

}

export default User;