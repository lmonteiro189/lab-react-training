import React from 'react';
import './App.css';
import IdCard from './../src/components/IdCard';
import Random from './../src/components/Random';
import BoxColor from './../src/components/BoxColor';
import LikeButton from './components/LikeButton';
import CountButton from './components/CountButton';
import Clickable from './components/Clickable';

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
    <div className="App">
      <h1>1 - Idcard</h1>
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
      <h1>2 - Greetings</h1>
      <StrongBlock message="Hallo Ludwig" />
      <StrongBlock message="Bonjour François" />
      <h1>3 - Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>4 - BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>5 - </h1>
      <h1>6 - </h1>
      <h1>7 - </h1>
      <h1>8 - Like and Count Button</h1>
      <LikeButton />
      <CountButton />
      <h1>9 - Clickable Picture</h1>
      <Clickable
        img="/img/persons/maxence.png"
        imgOne="/img/persons/maxence-glasses.png"
      />
    </div>
  );
};

export default App;
