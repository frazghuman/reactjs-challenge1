import './App.css';
import Monsters from './components/monsters/Monsters';
import MonstersBattle from './components/monsters-battle/MonstersBattle';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='AppContainer'>
          <h1>Battle of Monsters</h1>
          <Monsters />
          <MonstersBattle />
        </div>
      </div>
    </Provider>
  );
}

export default App;
