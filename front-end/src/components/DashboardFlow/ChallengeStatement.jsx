import { useId, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "textInput": {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    }
  }
};

const initialState = {
  howMightWe: "",
  for: "",
  inOrderTo: "",
};

const inputs = [
  { label: "How might we...", key: "howMightWe" },
  { label: "for...", key: "for" },
  { label: "in order to...", key: "inOrderTo" },
];

const ChallengeStatement = ({ onChange, value }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const id = useId();

  return (
    <div className="flex flex-col gap-8">
      {inputs.map(({ label, key }) => (
        <div key={key} className="flex flex-col gap-1">
          <label htmlFor={`${key}-${id}`} className="text-xs">
            {label}
          </label>
          <input
            id={`${key}-${id}`}
            type="text"
            className="bg-transparent text-gray-700 px-0 py-1 border-0 border-b-2 focus:outline-none focus:ring-0"
            onChange={(evt) => {
              dispatch({
                type: "textInput",
                payload: { key, value: evt.target.value },
              });
            }}
            value={state.problem}
          />
        </div>
      ))}
    </div>
  );
};

export default ChallengeStatement;
