import './App.css'
import fruitData from './data/fruits.json';
import peopleData from './data/people.json';

import LuckyNumber from './components/lucky-number/lucky-number';
import PersonCondition from './components/person-condition/person-condition';
import Welcome from './components/welcome/welcome';
import FruitList from './components/fruit-list/fruit-list';
import PeopleTable from './components/people-table/people-table';
import Multi3 from './components/multi-3/multi-3';
import TemperatureConvertForm from './components/temperature-convert-form/temperature-convert-form';

function App() {

  return (
    <div className='App'>
      <h1>Les demos !</h1>

      {/* <h2>Demo 01 - Intro</h2>
      <Welcome name='Della' />
      <LuckyNumber /> */}

      {/* <h2>Demo 02 - Condtion</h2>
      <PersonCondition gender='F' firstname='Zaza' lastname='Vanderquack' />
      <PersonCondition gender='M' firstname='Balthazar' lastname='Picsou' />
      <PersonCondition gender='X' firstname='Gérard' lastname='Mentor' /> */}

      {/* <h2>Demo 03 - Les collections</h2>
      <FruitList fruits={fruitData} />
      <PeopleTable people={peopleData} /> */}

      {/* <h2>Demo 04 - Le state</h2>
      <Multi3 /> */}

      <h2>Demo 05 - Les formulaires</h2>
      <TemperatureConvertForm />
      <TemperatureConvertForm />
    </div>
  )
}

export default App
