import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) { // injects dispatch so we don't have to
    return courseApi
      .getCourses()
      .then(courses => { // returns promise
        dispatch(loadCourseSuccess(courses)); // you can also add this directly{ type: types.LOAD_COURSES_SUCCESS, courses };
      })
      .catch(error => { // this should be an error action
        throw error;
      });
  };
}
