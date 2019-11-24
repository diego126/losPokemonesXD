import { handleResponse, handleError, handleResponseList } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCoursesData(page,_sort,_order) {
  let string_order="";
  if(_sort && _order){
    string_order="&_sort="+_sort+"&_order="+_order
  }
  return fetch(baseUrl + "?_page="+page+"&_limit=5"+string_order)
    .then(handleResponseList)
    .catch(handleError);
}
export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
