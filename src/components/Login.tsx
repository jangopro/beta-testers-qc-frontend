import React, { useRef } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

// TODO rename attributes name for the input / labels
// TODO Write unit tests
const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function Login() {
  const [login, { data }] = useMutation(LOGIN, {
    onCompleted: data => {
      if (data.login) {
        localStorage.setItem("token", data.login);
        console.log("success");
        console.log(localStorage);
      } else {
        console.log("Not Valid");
      }
    }
  });

  const email: React.RefObject<HTMLInputElement> = useRef(null);
  const password: React.RefObject<HTMLInputElement> = useRef(null);
  return (
    // TODO Use right params
    // TODO Success, validation form
    <div>
      <h2>Login</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          login({
            variables: {
              email: email.current!.value,
              password: password.current!.value
            }
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            ref={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
