import { CHANGE_SIDEBAR_TYPE, CHANGE_PRELOADER } from "./actionTypes"

const INIT_STATE = {
  leftSideBarType: "default",
  isPreloader: false,
  isMobile: false,
}

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PRELOADER:
      return {
        ...state,
        isPreloader: action.payload,
      }
    case CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      }
    default:
      return state
  }
}

export default Layout
