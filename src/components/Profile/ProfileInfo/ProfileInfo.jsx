import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import UserImg from "../../../assets/images/userImg.jpg";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large != null ? profile.photos.large : UserImg } className={styles.avatar}/>
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>
                <h2>{profile.fullName}</h2>
                <p>Обо мне: {profile.aboutMe}</p>
                <h4>Контакты:</h4>
                <p>facebook: {profile.contacts.facebook}</p>
                <p>website: {profile.contacts.website}</p>
                <p>vk: {profile.contacts.vk}</p>
                <p>twitter: {profile.contacts.twitter}</p>
                <p>instagram: {profile.contacts.instagram}</p>
                <p>youtube: {profile.contacts.youtube}</p>
                <p>github: {profile.contacts.github}</p>
                <p>mainLink: {profile.contacts.mainLink}</p>
                <p>Описние работы:{profile.lookingForAJobDescription} </p>
            </div>
        </div>
    );
}

export default ProfileInfo;