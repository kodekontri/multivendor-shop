import counterTypes from "../types/counter"


const INITIAL_STATE = {

    count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case counterTypes.increment:
            return {

                ...state, count: state.count + 1,

            };

        case counterTypes.decrement:
            return {
                ...state, count: state.count - 1,

            };

        default: return state;

    }

};

export default counterReducer;