import { call, put, takeEvery } from "redux-saga/effects"
import { getModels } from "./actions"
import { LOAD_MODELS } from "./actionTypes"

const urlModels =
  "https://yrbl6a35qg.execute-api.us-east-2.amazonaws.com/dev/projects?user_id=1"

function fetchModels() {
  return fetch(urlModels, {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    mode: "cors",
  }).then(resp => resp.json())
}

function* loadDataModels() {
  const data = yield call(fetchModels)

  yield put(getModels(data))
}

function* ProjectsSaga() {
  yield takeEvery(LOAD_MODELS, loadDataModels)
}

export default ProjectsSaga
