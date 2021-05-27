import {MessageType} from "pages/chatPage/components/Messages/messages";

export const CActions = {
    setMessages: (messages: Array<MessageType>) => ({type: 'SET_MESSAGES', messages} as const),
    setChannelStatus: (status: number | undefined) => ({type: 'SET_CHANNEL_STATUS', status} as const),

    startMessageListening: () => ({type: 'START_MESSAGE_LISTENING'} as const),
    stopMessageListening: () => ({type: 'STOP_MESSAGE_LISTENING'} as const),
    sendMessage: (message: string) => ({type: 'SEND_MESSAGE', message} as const),
};