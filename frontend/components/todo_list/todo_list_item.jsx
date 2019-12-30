import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props
    return (
      <div>
        <h3>{todo.title}</h3>
      </div>
    );
  }
}
