import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions'

function App() {
  const counter = useSelector((state) => {return state.counter});
  const isLogged = useSelector((state) => {return state.isLogged});

  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Counter {counter}
        </h1>
        <button onClick={() => { dispatch(increment())}}>+</button>
        <button onClick={() =>{ dispatch(decrement())}}>-</button>
      </header>
    </div>
  );
}

export default App;
