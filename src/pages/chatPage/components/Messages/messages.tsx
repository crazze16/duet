import React, {useEffect, useState} from 'react'
import {Message} from "../Message/message";
import {WrapperSC} from "./messages.styles";
import {useSelector} from "react-redux";
import {CombinedStateType} from "../../../../redux-store/rootReducer";


export type MessageType = {
    message: string
    photo: string | null
    userId: number
    userName: string
}

export const Messages: React.FC<{ ws: WebSocket | null }> = (props) => {

    const {ws} = {...props};

    const messages = useSelector((state: CombinedStateType) => state.ChatReducer.messages);

    // useEffect(() => {
    //     const onMessageHandler = (e: MessageEvent) => {
    //         setMessages((prevState => [...prevState, ...JSON.parse(e.data)]));
    //         console.log('data:', e.data)
    //     };
    //     ws?.addEventListener('message', onMessageHandler);
    //
    //     return () => ws?.removeEventListener('message', onMessageHandler)
    //
    // }, [ws]);



    return (
        <WrapperSC>
            {messages && messages.map((item: MessageType, index) => <Message message={item} key={index}/>)}
        </WrapperSC>
    )
};