import { GET_MODELS } from "./actionTypes"

const INIT_STATE = {
  models: {},
}

const Models = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        models: action.payload,
      }
    default:
      return state
  }
}

export default Models
