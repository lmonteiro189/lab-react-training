import React from 'react';

// MIDDLE WAY AO INVES DE ENVIAR O FORM AO SERVER DIRETAMENTE

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      person: 'James Dean',
      email: 'a@b',
      message: '',
    };
  }
  handleFormSubmission = (event) => {
    event.preventDefault();
    const { person, email, message } = this.state;
    alert(
      `Person with the name ${person} and the email ${email} says: ${message}`
    );
  };

  handleInputChange = (event) => {
    const $inputDomNode = event.target;

    const nameAtribute = $inputDomNode.name;
    const value = $inputDomNode.value;

    this.setState({
      [nameAtribute]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <input
            name="person"
            type="text"
            placeholder="Full name"
            value={this.state.person}
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Message here.."
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default Forms;
