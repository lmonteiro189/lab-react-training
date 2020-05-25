import React from 'react';
import './App.css';
import IdCard from './../src/components/IdCard';
import Random from './../src/components/Random';

const StrongBlock = (props) => {
  const abc = props.message;
  return (
    <div>
      <strong>{abc}</strong>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Idcard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <StrongBlock message="Hallo Ludwig" />
      <StrongBlock message="Bonjour François" />
      <h1>Random</h1>
    </div>
  );
};

export default App;
