import { combineReducers } from "redux";
import { ADD_NAME } from "./constants";
 
initilState = {
    name : ""
}

function reducer(state = initilState, action){
    switch (action.type) {
        case ADD_NAME:
            return action.payload;

        default:
            return state;
    }
}

const reducers = combineReducers({reducer});

export default reducers;