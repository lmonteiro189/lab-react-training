import React from 'react';
import './App.css';
import IdCard from './../src/components/IdCard';
import Random from './../src/components/Random';
import BoxColor from './../src/components/BoxColor';
import LikeButton from './components/LikeButton';
import CountButton from './components/CountButton';
import Clickable from './components/Clickable';
import Profiles from './components/Profiles';
import StrongBlock from './components/Greetings';
import Creditcard from './components/Creditcard';
import Forms from './components/Forms';
import ListTodo from './components/ListTodo';

import Team from './components/Team';

const App = () => {
  return (
    <div className="App">
      <h1>REACT TRAINING</h1>
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
      <h1>5 - CreditCard</h1>
      <Creditcard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <Creditcard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <Creditcard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      {/* <h1>6 and 7 - Rating</h1> */}
      <h1>8 - Like and Count Button</h1>
      <LikeButton />
      <CountButton />
      <h1>9 - Clickable Picture</h1>
      <Clickable
        img="/img/persons/maxence.png"
        imgOne="/img/persons/maxence-glasses.png"
      />
      {/* <h1>10 - Dice</h1>
      <h1>11 - Carousel</h1>
      <h1>12 - Numbers Table</h1> */}
      <h1>13 - Profiles(facebook)</h1>
      <Profiles />
      <h1>Codealong 26/may</h1>
      <Forms />
      <br />
      <br />
      <ListTodo />
    </div>
  );
};

export default App;
