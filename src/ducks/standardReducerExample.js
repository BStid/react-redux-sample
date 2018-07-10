// CONSTANTS (ACTION TYPES) ALL CAPS TO DENOTE THAT IT SHOULDN'T BE CHANGED
const UPDATE_NAME = 'UPDATE_NAME';

// ACTION CREATORS (ALWAYS RETURN OBJECTS CALLED ACTIONS)
export function updateNameAction(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

// INITIAL STATE

const initialState = {
  name: 'Jeff'
};

// REDUCER

// State is set to initialState by default for initial Application load where
// no action is dispatched
export default function standardReducerExample(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      // return Object.assign({}, state, { name: action.payload });
      return {
        ...state,
        name: action.payload
      };
    // Can Also Be Written in es8 object rest spread `return { ...state, name: action.payload }`
    default:
      return state;
  }
}
