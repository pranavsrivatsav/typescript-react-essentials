import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

function Component() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>

      <div className="btn-container">
        <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn">
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} className="btn">
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })} className="btn">
          Reset
        </button>
      </div>
      <div className="btn-container">
        <button onClick={() => dispatch({ type: "ACTIVATE" })} className="btn">
          Set Status to Active
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "DEACTIVATE" })}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
