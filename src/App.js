import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, sign_in } from './actions';


function App() {
  const counter = useSelector((state) => state.counterReducer);
  const islogged = useSelector((state) => state.isloggedReducer);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter { counter }</h1>
      { islogged ? <h3>Vous etes connecté</h3> : <h3>Vous etes deconnecté</h3> }
      <button onClick={ (e) => dispatch(increment()) }>+</button>
      <button onClick={ (e) => dispatch(decrement()) }>-</button>
      <button onClick={ (e) => dispatch(sign_in()) }>Connect</button>
    </div>
  );
}

export default App;
