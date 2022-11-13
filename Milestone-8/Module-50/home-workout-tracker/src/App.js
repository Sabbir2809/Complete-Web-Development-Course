import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div>
        <h2 className='subtitle'>Select today’s exercise</h2>
        <Exercise />
      </div>
    </div>
  );
}

export default App;
