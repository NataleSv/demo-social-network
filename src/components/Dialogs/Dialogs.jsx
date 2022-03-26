import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./Message/AddMessageForm";



const Dialogs = (props) => {

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map(
    dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
);
let messagesElements = state.messages.map( 
    message => <Message key={message.id} message={message.message}/>
);
let newMessageBody = state.newMessageBody;




let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
}

if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>
    
            <div className={styles.messages}>
                <div>{ messagesElements }</div> 
                 <AddMessageForm onSubmit={addNewMessage}/>


            </div>
            
        </div>
    )
}



export default Dialogs;