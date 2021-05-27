import React from "react";
import {BodySC, InfoSectionSC, WrapperSC} from "./message.styles";
import {MessageType} from "../Messages/messages";

export const Message: React.FC<{message: MessageType}> = (props) => {

    const {userName, userId, photo, message} = {...props.message}

    return (
        <WrapperSC>
            <InfoSectionSC>
                <img src="https://via.placeholder.com/40" alt=""/>
                <div>{userName}</div>
            </InfoSectionSC>
            <BodySC>
                {message}
            </BodySC>
        </WrapperSC>
    )
};