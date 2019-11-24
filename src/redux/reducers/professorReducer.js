import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function ProfessorReducer(state = initialState.professors, action) {
  var flag=0;
  switch (action.type) {

    case types.CREATE_PROFESSOR_SUCCESS:
      return [...state, { ...action.professor }];
    
    case types.UPDATE_PROFESSOR_SUCCESS:
      return state.map(professor =>
        professor.id === action.professor.id ? action.professor : professor
      );

    case types.LOAD_PROFESSORS_SUCCESS:
      console.log("el flag es " + action.flag);
      if(action.flag){
        flag=1;
      }
      
      if(flag==0){
        return action.professors;
      }
      else {  
        var palabra=action.data;    
        console.log(action.data);        
        var regex= new RegExp(`^${palabra}` , 'i');
        return action.professors.filter(n=>regex.test(n.name));   
      }  

    case types.DELETE_PROFESSOR_OPTIMISTIC:
        return state.filter(professor => professor.id !== action.professor.id);

    default:
      return state;
  }
}
