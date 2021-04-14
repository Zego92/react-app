import { GET_PROJECTS } from "./actionTypes"

const INIT_STATE = {
  projects: {},
}

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    default:
      return state
  }
}

export default Layout
