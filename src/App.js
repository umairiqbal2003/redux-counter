

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddCounterAction, MinusCounterAction } from './counters/action';


function App() {
  // let [counter,setcounter] = useState(0)
  const dispatch = useDispatch();
  const {globalCounter} = useSelector((state)=>state.addCounterReducer)
  console.log(globalCounter)

  const addCounter = ()=>{
   dispatch(AddCounterAction());
  }
  const minusCounter = ()=>{
    dispatch(MinusCounterAction());
  }
  return (
   <>
    <div className='container'>
      <h1>
        Redux Counter App
      </h1>
      <h1 className='result'>{globalCounter}</h1>
      <div className='button-center'>
      <button onClick={minusCounter}>-</button>
      <button onClick={addCounter}>+</button>
      </div>
    </div>
   </>
  );
}

export default App;
