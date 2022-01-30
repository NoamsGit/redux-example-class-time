import {inc, dec} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";

function MyButtons() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
    </>
  );
}

export default MyButtons;
