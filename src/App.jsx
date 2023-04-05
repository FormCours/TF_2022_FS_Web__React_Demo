import './App.css'
import LuckyNumber from './components/lucky-number/lucky-number';
import Welcome from './components/welcome/welcome';

function App() {

  return (
    <div className='App'>
      <h1>Les demos !</h1>

      <h2>Demo 01 - Intro</h2>
      <Welcome name='Della' />
      <LuckyNumber />
    </div>
  )
}

export default App
