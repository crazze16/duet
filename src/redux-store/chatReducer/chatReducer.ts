import { InferActionsTypes} from "../rootReducer";
import {CActions} from "./actions";
import {MessageType} from "../../pages/chatPage/components/Messages/messages";

type InitialStateType = typeof initialState
const initialState = {
    messages: [] as Array<MessageType>,
    channelStatus: 0 as number | undefined
};

const ChatReducer = (state = initialState, action: InferActionsTypes<typeof CActions>): InitialStateType => {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            };
        case "SET_CHANNEL_STATUS":
            return {
                ...state,
                channelStatus: action.status
            };
        default: return {...state}
    }
};





export default ChatReducer