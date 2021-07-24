import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import {BiError, BiCheck} from "react-icons/bi"
import alertActions from "../../redux/actions/alert.actions";

const AlertBox = () => {
  const dispatch = useDispatch();
  const onDismiss = () => dispatch(alertActions.closeAlert());
  const alert = useSelector((state) => state.alert);
  return (
    <Alert
      variant={alert.type}
      show={alert.show}
      onClose={onDismiss}
      dismissible
    >
      <p>
        {alert.type == 'danger' ? <BiError size="24"/> : ''}
        {alert.type == 'success' ? <BiCheck size="24"/> : ''}
        {alert.message}
      </p>
    </Alert>
  );
};

export default AlertBox;
