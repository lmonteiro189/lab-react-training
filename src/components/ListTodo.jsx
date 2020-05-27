import React, { Component } from 'react';

// const generateID = () => Math.random().toString();
// const generateID = () => new Date();

class ListTodo extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      list: [],
    };
  }

  handleInputChange = (event) => {
    const $domNode = event.target;
    const value = $domNode.value;
    const name = $domNode.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const item = this.state.item;

    // OPTION 1
    // const listClone = [...this.state.list];
    // listClone.push({ id: Date.now(), value: item });
    // this.setState({
    //   list: listClone,
    // });

    // OPTION 2
    // this.setState({
    //   list: [...this.state.list].concat({id: Date.now(), value: item})
    // });

    // OPTION 3
    if (item.trim()) {
      this.setState({
        list: [...this.state.list, { id: Date.now(), value: item }],
        item: '',
      });
    }
  };

  deleteItem = (id) => {
    const filterList = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: filterList,
    });

    // NAO FUNCIONA COM POP
    // const list = [...this.state.list];
    // list.pop();
    // this.setState({
    //   list: list,
    // });
  };

  render() {
    return (
      <div className="ListTodo">
        <form onSubmit={this.handleFormSubmission}>
          <input
            name="item"
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
            placeholder="Write your to do item here..."
            required
          />
          <button>+</button>
        </form>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.value}{' '}
              <button onClick={() => this.deleteItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListTodo;
