import React, { Component, useRef } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

// TODO rename attributes name for the input / labels
// TODO Write unit tests
const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export default function SignUp() {
  const [signUp, { data }] = useMutation(CREATE_USER);

  const name: React.RefObject<HTMLInputElement> = useRef(null);
  const email: React.RefObject<HTMLInputElement> = useRef(null);
  const password: React.RefObject<HTMLInputElement> = useRef(null);
  return (
    // TODO Use right params
    // TODO Success, validation form
    // TODO Move HTML to another Component (Sign Up Form) and this one named SignUp
    <div>
      <h2>Sign Up</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          signUp({
            variables: {
              name: name.current!.value,
              email: email.current!.value,
              password: password.current!.value
            }
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            ref={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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
