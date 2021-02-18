import React from 'react'
import {connect} from "react-redux";
import {sayName} from "../../redux-store/MoviePageReducer";

const Test = (props) => {
    return (
        <div>
            <button onClick={()=> alert(props.messagesData)}>is it working?</button>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        messagesData: state.MoviePageReducer.name,
    }
};

export const TestContainer = connect(mapStateToProps)(Test);