import React, {useEffect, useState} from 'react'
import {Messages} from "./components/Messages/messages";
import {useDispatch, useSelector} from "react-redux";
import {CActions} from "../../redux-store/chatReducer/actions";
import {CombinedStateType} from "../../redux-store/rootReducer";

export const ChatPage: React.FC = () => {
    return (
        <div style={{background: 'white'}}>
            <Chat/>
        </div>
    )
};

export const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

    useEffect(() => {
        const closeHandler = () => setTimeout(createChannel, 3000);
        let ws: WebSocket;

        function createChannel() {
            //clear prev websocket before a new websocket initialization
            ws?.removeEventListener('close', closeHandler);
            ws?.close();

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler);
            setWsChannel(ws)
        }
        // createChannel();
        dispatch(CActions.startMessageListening());
        //close channel after leaving component
        return () => {dispatch(CActions.stopMessageListening())}
    }, []);

    return (
        <div>
            <Messages ws={wsChannel}/>
            <AddMessageForm ws={wsChannel}/>
        </div>
    )
};

export const AddMessageForm: React.FC<{ ws: WebSocket | null }> = (props) => {

    const {ws} = {...props};

    const [messageBody, setMessageBody] = useState<string>('');
    // const [channelStatus, setChannelStatus] = useState<'pending' | 'open'>();

    const channelStatus = useSelector((state: CombinedStateType) => state.ChatReducer.channelStatus)

    const dispatch = useDispatch();

    const sendMessage = () => {
        if (messageBody)
            dispatch(CActions.sendMessage(messageBody));
        setMessageBody('')
    };


    // useEffect(() => {
    //     const openHandler = () => setChannelStatus('open');
    //     ws?.addEventListener('open', openHandler);
    //     return () => {
    //         ws?.removeEventListener('open', openHandler)
    //     }
    // }, [ws]);
    return (
        <div>
            <div>
                <textarea onChange={((event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessageBody(event.currentTarget.value))} value={messageBody}/>
            </div>
            <div>
                <button disabled={channelStatus !== 1} onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
};


