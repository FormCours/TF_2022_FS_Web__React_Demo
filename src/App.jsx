import './App.css'
import LuckyNumber from './components/lucky-number/lucky-number';
import PersonCondition from './components/person-condition/person-condition';
import Welcome from './components/welcome/welcome';

function App() {

  return (
    <div className='App'>
      <h1>Les demos !</h1>

      <h2>Demo 01 - Intro</h2>
      <Welcome name='Della' />
      <LuckyNumber />

      <h2>Demo 02 - Condtion</h2>
      <PersonCondition gender='F' firstname='Zaza' lastname='Vanderquack' />
      <PersonCondition gender='M' firstname='Balthazar' lastname='Picsou' />
      <PersonCondition gender='X' firstname='Gérard' lastname='Mentor' />
    </div>
  )
}

export default App
