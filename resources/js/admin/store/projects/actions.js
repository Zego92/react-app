import { GET_PROJECTS, LOAD_PROJECTS } from "./actionTypes"

export const getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects,
})

export const loadProjects = () => ({
  type: LOAD_PROJECTS,
})
