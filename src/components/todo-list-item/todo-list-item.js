import React from 'react';

import './todo-list-item.css';
export default class TodoListItem extends React.Component {

  state = {
    done: false,
    important: false
  };

  onLableClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    });
  }
  onImportantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    });
  };
  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item ";

    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLableClick}
        >
          {label}
        </span>

        <button type="button"
          onClick={this.onImportantClick}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}
