import types from './types';

export function updateChat(message){
    return{
        type: types.UPDATE_CHAT_LOG,
        payload: message
    };
}