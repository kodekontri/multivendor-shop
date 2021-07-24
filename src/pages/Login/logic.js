import { useState } from "react";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/user.actions";

export function useLogin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setData({ ...data, ...{ [e.target.name]: e.target.value } });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      return alert("please complete the form");
    }

    setLoading(true)
    await dispatch(userActions.login(email, password));
    setLoading(false)
  };
  return {data, loading, handleLoginSubmit, handleInputChange}
}
