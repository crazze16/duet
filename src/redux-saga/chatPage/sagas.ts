import {call, put, takeEvery} from "redux-saga/effects";
import {CActions} from "../../redux-store/chatReducer/actions";
import {take} from "redux-saga-test-plan/matchers";
import {END, eventChannel} from "redux-saga";

export function* chatWatcher() {
    yield takeEvery('START_MESSAGE_LISTENING', initializeWebSocketsChannel);
    yield takeEvery('SET_MESSAGES', () => 'messages taken');
    yield takeEvery('SEND_MESSAGE', sendMessage);
}

let ws: WebSocket;

function createEventChannel() {
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    return eventChannel(emit => {

            ws.onmessage = e => {
                // dispatch an action with emitter here\
                return emit(CActions.setMessages(JSON.parse(e.data)))
            };
            ws.onopen = () => {
                console.log('opened');
            };
            ws.onclose = (e) => {
                if (e.code === 1005) {
                    console.log("WebSocket: closed");
                    // you probably want to end the channel in this case
                    // emit(END);
                } else {
                    console.log('Socket is closed Unexpectedly. Reconnect will be attempted in 4 second.', e.reason);
                    setTimeout(() => {
                        createEventChannel();
                    }, 4000);
                }
            };
            // unsubscribe function
        return () => {
            // ws.close()
        }

    })

}

function sendMessage(action: { type: string, message: string }) {
    try {
        console.log(action)
        ws.send(action.message);
    } catch (e) {

    }
}

function* initializeWebSocketsChannel(): any {
    const channel = yield call(createEventChannel);
    while (true) {
        yield put(CActions.setChannelStatus(ws.readyState));
        console.log(ws.readyState);
        const action = yield take(channel);
        console.log(action.messages);
        yield put(action);
    }
}






/////////////

function createWebSocketConnection() {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

        socket.onopen = function () {
            resolve(socket);
        };

        socket.onerror = function (evt) {
            console.log(123)
            reject(evt);
        }
    });
}

function createSocketChannel(socket: WebSocket) {

    return eventChannel(emit => {
        socket.onmessage = (event) => {
            // console.log(event.data)
            emit(event.data)
        };

        socket.onclose = () => {
            console.log('closed trying to reconnect')
            setTimeout(() => {
                listenForSocketMessages()
            }, 2000)


        };

        const unsubscribe = () => {
            socket.onmessage = null;
        };

        return unsubscribe;
    });
}

function* listenForSocketMessages(): any {
    let socket;
    let socketChannel;

    try {
        socket = yield call(createWebSocketConnection);
        socketChannel = yield call(createSocketChannel, socket);

        // tell the application that we have a connection
        // yield dispatch(LiveDataActions.connectionSuccess());

        while (true) {
            // wait for a message from the channel
            const payload = yield take(socketChannel);
            // a message has been received, dispatch an action with the message payload
            yield put(CActions.setMessages(JSON.parse(payload)));

        }
    } catch (error) {
        // yield dispatch();
    }
    // finally {
    //     if (yield cancelled()) {
    //         // close the channel
    //         socketChannel.close();
    //
    //         // close the WebSocket connection
    //         socket.close();
    //     } else {
    //         yield dispatch(LiveDataActions.connectionError('WebSocket disconnected'));
    //     }
    // }
}

function* flow(): any {
    yield call(listenForSocketMessages)
}

