import { GET_MODELS, LOAD_MODELS } from "./actionTypes"

export const getModels = projects => ({
  type: GET_MODELS,
  payload: projects,
})

export const loadModels = () => ({
  type: LOAD_MODELS,
})
