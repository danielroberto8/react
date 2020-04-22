import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  addTodoHandler,
  userInputHandler,
  loginHandler,
} from "../../redux/actions";
import swal from "sweetalert";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <h1>todo screen</h1>
        <input
          type="text"
          className="form-control"
          placeholder="masukkan kata"
          onChange={(e) => {
            this.props.todoInputHandler(e.target.value);
          }}
        />
        {/* <input
          type="text"
          className="form-control"
          placeholder="masukkan username"
          onChange={(e) => {
            this.props.userInputHandler(e.target.value);
          }}
        /> */}
        {/* <input
          type="button"
          className="btn btn-primary"
          value="Add Todo"
          onClick={() => {
            this.props.addTodoHandler(this.props.todo.todoInput);
          }}
        />
        {this.props.todo.todoList.map((val) => {
          return <p className="text-center">{val}</p>;
        })} */}
        <p>Testing 1 : {this.props.user.testing}</p>
        <p>Testing 2 : {this.props.user.testing2}</p>
        <input
          type="button"
          className="btn btn-primary"
          value="click me"
          onClick={this.props.loginHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  todoInputHandler,
  userInputHandler,
  addTodoHandler,
  loginHandler,
})(TodoReduxScreen);
