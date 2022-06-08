import './App.css';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "./redux/CounterSlice";
 
function App() {
  // create a state variable called counter and set it to 0
  const [counter , setCounter] = useState(0);
  const counterStore = useSelector(state => state.counter);
  // create a dispatch variable
  const dispatch = useDispatch();

  // create a function called increment that adds 1 to the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  // create a function called decrement that subtracts 1 from the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App container-md pt-5">
      <div className = "pb-3">
      <h2> Simple Counter Application... 🔥 </h2>
      </div>
      <div className = "row">
        <div className = "col-md-5">
          <Button variant="primary" onClick = {() => dispatch(incrementAction()) }>
            Increment
          </Button>
        </div>
        <div className = "col-md-2">
          <h4>
            {counterStore.counter}
          </h4>
        </div>
        <div className = "col-md-5">
          <Button variant="primary" onClick = {() => dispatch(decrementAction())}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
