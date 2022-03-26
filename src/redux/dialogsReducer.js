
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;