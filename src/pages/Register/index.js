import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

import Button from "../../components/button";
import Alert from "../../components/alert";
import { useRegister } from "./logic";

export default function Register() {
  const state = useSelector((state) => state);
  const {handleInputChange, handleRegisterSubmit, data, loading} = useRegister();

  if(state.user.loggedIn){
    return <Redirect path="/"/>
  }

  return (
    <div className="container col-6 mx-auto mt-4">
      <div className="card">
        <Alert/>
        <div className="card-body">
          <h1 className="text-center">Register</h1>
          <form action="" onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
              <input
                name="email"
                onChange={handleInputChange}
                defaultValue={data.email}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                name="password"
                onChange={handleInputChange}
                value={data.password}
                type="password"
                className="form-control"
              />
            </div>
            {state.user.authError ? (
              <div className="alert alert-danger">{state.user.authError}</div>
            ) : (
              ""
            )}
            <Button className="btn btn-primary" loading={loading}>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
