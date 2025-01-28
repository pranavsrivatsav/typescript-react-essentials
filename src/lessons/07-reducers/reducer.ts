type Status = "PENDING" | "ACTIVE" | "INACTIVE";

type StateType = {
  count: number;
  status: Status;
};

export const initialState: StateType = {
  count: 0,
  status: "PENDING",
};

type actionType =
  | "INCREMENT"
  | "DECREMENT"
  | "RESET"
  | "ACTIVATE"
  | "DEACTIVATE";

const reducer = (
  state: StateType,
  action: { type: actionType; payload?: object }
): StateType => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: initialState.count,
      };
    case "ACTIVATE":
      return {
        ...state,
        status: "ACTIVE",
      };
    case "DEACTIVATE":
      return {
        ...state,
        status: "INACTIVE",
      };
  }
};

export default reducer;
