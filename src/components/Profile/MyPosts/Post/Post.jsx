import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
      
        
                <div className={styles.item}>
                    <img src="https://miro.medium.com/fit/c/1360/1360/1*aHkiCy29-OUFYmut2Mjabg.png" />
                    { props. message }
                    <div>
                       <span>like</span> {props.likesCount}
                    </div>
                    
                </div>


    );
}

export default Post;