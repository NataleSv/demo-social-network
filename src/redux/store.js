import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u', likesCount: 12},
                {id: 2, message: 'Hi, how are g', likesCount: 1000}
            ],
            newPostText: 'it-kamasutra' 
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'}
            ],
            messages: [
                {id: 1, message: 'fewsdwelllsgsd'},
                {id: 2, message: 'fewfdhhhhhbwsv'},
                {id: 3, message: 'efgvsfgwsfwecs'},
                {id: 4, message: 'wfsewgvwsgggvv'},
                {id: 5, message: 'wfesgbedfgwfsc'}
            ],
            newMessageBody: ""
        }     
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
  
    
    dispatch(action) {

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._callSubscriber(this._state);
        
    }
   
}









export default store;
window.state = store;