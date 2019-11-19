import * as types from "./actionTypes";
import * as professorApi from "../../api/professorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getProfessorSuccess(professors) {
  return { type: types.LOAD_PROFESSORS_SUCCESS, professors };
}

export function createProfessorSuccess(professor) {
  return { type: types.CREATE_PROFESSOR_SUCCESS, professor };
}

export function updateProfessorSuccess(professor) {
  return { type: types.UPDATE_PROFESSOR_SUCCESS, professor };
}

export function deleteProfessorOptimistic(professor) {
  return { type: types.DELETE_PROFESSOR_OPTIMISTIC, professor };
}

export function getProfessors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return professorApi
      .getProfessors()
      .then(professors => {
        dispatch(getProfessorSuccess(professors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveProfessor(professor) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return professorApi
      .saveProfessor(professor)
      .then(savedProfessor => {
        professor.id
          ? dispatch(updateProfessorSuccess(savedProfessor))
          : dispatch(createProfessorSuccess(savedProfessor));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteProfessor(professor) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteProfessorOptimistic(professor));
    return professorApi.deleteProfessor(professor.id);
  };
}

