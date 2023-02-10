import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>

          <button onClick={resetAll}>Reset All</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
