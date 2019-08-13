import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

// TODO rename attributes name for the input / labels
// TODO Write unit tests
const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default class Login<Props, State> extends Component {
  private email: React.RefObject<HTMLInputElement>;
  private password: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }
  render() {
    return (
      // TODO Use right params
      // TODO Success, validation form
      <Mutation<{}, {}> mutation={LOGIN}>
        {(login, { data }) => (
          <div>
            <h2>Login</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                login({
                  variables: {
                    email: this.email.current!.value,
                    password: this.password.current!.value
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
                  ref={this.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref={this.password}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
