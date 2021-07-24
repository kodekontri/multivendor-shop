import alertTypes from '../types/alert';

const alertActions = {
    showAlert: (message, type="success") => ({
        type: alertTypes.alertOpen,
        payload: {
            type: type,
            message: message
        }
    }),
    
    closeAlert: () => ({
        type: alertTypes.alertClose,
    }),
}

export default alertActions