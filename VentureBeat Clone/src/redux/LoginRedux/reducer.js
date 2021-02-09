import {GOOGLE_AUTH_FAILURE,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_REQUEST} from "./actionType.js"
    


const initstate = {
    userData: [],
    isAuth:false
  };
  const Googlereducer = (state = initstate, { type, payload }) => {
    switch (type) {
     
      case GOOGLE_AUTH_SUCCESS:
        return {
          ...state,
          userData: payload,
          isAuth:true
        };
      case GOOGLE_AUTH_FAILURE:
        return {
          ...state,
          isAuth:false
        };
      case GOOGLE_AUTH_REQUEST:
        return {
          ...state
        };
      
      default:
        return state;
    }
  };

  export default Googlereducer