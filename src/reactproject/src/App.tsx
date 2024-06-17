import { useReducer } from 'react';
import { ChangeEvent } from 'react';

const initialState = { name: 'Roberto Sosa', age: 25 };

const INCREMENTED_AGE = 'incremented_age';
const CHANGED_NAME = 'changed_name';


interface State {
  name: string;
  age: number;
}

type Action =
  | { type: 'incremented_age' }
  | { type: 'changed_name'; nextName: string };


function reducer(state: State, action: Action) {
  switch (action.type) {
    case INCREMENTED_AGE:
      return {
        ...state,
        age: state.age + 1
      };
    case CHANGED_NAME:
      return {
        ...state,
        name: action.nextName
      };
    default:
      throw new Error('Unknown action: ');
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: INCREMENTED_AGE });
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: CHANGED_NAME,
      nextName: e.target.value
    });
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}
