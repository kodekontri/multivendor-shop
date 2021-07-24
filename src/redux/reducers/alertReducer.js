import alertTypes from "../types/alert"


const INITIAL_STATE = {
    show:false,
    type: null,
    message: null
};

const alertReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case alertTypes.alertOpen:
            return {...state, ...action.payload, show:true}

        case alertTypes.alertClose:
            return {...INITIAL_STATE}

        default: return state;

    }

};

export default alertReducer;