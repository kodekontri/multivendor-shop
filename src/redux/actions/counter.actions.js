import counterTypes from '../types/counter';

const counterActions = {
    increaseCounter: () => ({
        type: counterTypes.increment,
    }),
    
    decreaseCounter: () => ({
        type: counterTypes.decrement,
    })
}

export default counterActions