import counterActions from "./redux/actions/counter.actions";
import { useSelector, useDispatch } from "react-redux";
import Button from './components/button'
import useButton from "./components/button/useButton"

function App() {
    const counter = useSelector(state=>state.counter.count)
    const {load, setLoad} = useButton()
    const dispatch = useDispatch()
      return (
        <div className="App">
          <Button text="click" loading={load} onClick={()=>setLoad(true)}/>
          <button onClick={()=>dispatch(counterActions.increaseCounter())}>Click {counter}</button>
        </div>
      );
}

export default App;
