import { call, put, select, takeEvery } from "redux-saga/effects"
import { getProjects } from "./actions"
import { LOAD_PROJECTS } from "./actionTypes"
import { get } from "helpers/api_helper"

const urlProjects =
  "https://yrbl6a35qg.execute-api.us-east-2.amazonaws.com/dev/projects?user_id=1"

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  mode: "cors",
}

function fetchProjectsML() {
  return get(urlProjects, config)
}

//  const getUserId = (state) => state.User

function* loadDataProjects() {
  const data = yield call(fetchProjectsML)
  console.log(data)
  // let userId = yield select(getUserId);
  // console.log(userId)

  yield put(getProjects(data))
}

function* ProjectsSaga() {
  yield takeEvery(LOAD_PROJECTS, loadDataProjects)
}

export default ProjectsSaga
