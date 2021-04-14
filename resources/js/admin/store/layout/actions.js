import { CHANGE_SIDEBAR_TYPE, CHANGE_PRELOADER } from "./actionTypes"

export const changePreloader = layout => ({
  type: CHANGE_PRELOADER,
  payload: layout,
})

export const changeSidebarType = (sidebarType, isMobile) => {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType, isMobile },
  }
}
