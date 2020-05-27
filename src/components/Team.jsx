import React, { Component } from 'react';

const StudentInfo = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <h6>{props.age}</h6>
    </div>
  );
};

class Team extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: 'Name One', age: 20 },
        { name: 'Name Two', age: 21 },
        { name: 'Name Three', age: 22 },
      ],
      student: [
        { name: 'Vasco', age: 30 },
        { name: 'Fabio', age: 26 },
        { name: 'Ricardo', age: 22 },
      ],
    };
  }
  randStud = () => {
    // [].sort(() => 0.5 - Math.random())
    // this.state.student.sort(() => 0.5 - Math.random());

    // Shello copy items array:
    const student = [...this.state.student];
    this.setState({
      student: student.sort(() => 0.5 - Math.random()),
    });
  };
  removeLastStud = () => {
    const student = [...this.state.student];
    student.pop();
    this.setState({
      student: student,
    });
  };

  render() {
    const people = this.state.people;
    // NEVER SET A STATE IN THE RENDER METHOD OR IS GOING INTO A INFINIT LOOP:
    // this.setState({
    //   message:'abc'
    // })
    if (this.state.message !== 'abc') {
      console.log('Message is different from abc. Fixing it now.');
      this.setState({
        message: 'abc',
      });
    }

    return (
      <div className="Time">
        {people.map((person, index, originalArray) => {
          return (
            <li key={person.name}>
              <strong>{person.name}</strong> - <em>{person.age}</em>
            </li>
          );
        })}

        {this.state.student.map((student) => {
          return (
            <StudentInfo
              key={student.name}
              name={student.name}
              age={student.age}
            />
          );
        })}

        {/* {this.state.student.map((student) => (
          <StudentInfo key={student.name} {...student} />
        ))} */}
        <button onClick={this.randStud}>Randomize Students</button>
        <button onClick={this.removeLastStud}>Remove Students</button>
      </div>
    );
  }
}
export default Team;
