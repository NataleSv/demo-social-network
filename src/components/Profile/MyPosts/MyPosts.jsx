import React from "react";

import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       component={Textarea}
                       placeholder={"Post message"}
                       validate={[required, maxLength10]}/>
                <button>Add post</button>
            </div>

        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = React.memo(
    (props) => {
        let postElements =
            [...props.posts]
                .reverse()
                .map( post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);
        let newPostElement = React.createRef();

        let onAddPost = (values) => {

            props.addPost(values.newPostText);
        }

        return (
            <div>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div>
                    {postElements}

                </div>


            </div>

        );
    }
)



export default MyPosts;