import {JOBS_DATA_FAILURE,
  JOBS_DATA_SUCCESS,
  JOBS_DATA_REQUEST} from "./actionType.js"


const initstate = {
    jobsData: [],
    isError:false
  };
  const Jobsreducer = (state = initstate, { type, payload }) => {
    switch (type) {
      case JOBS_DATA_REQUEST:
        return {
          ...state
        };
      case JOBS_DATA_SUCCESS:
        return {
          ...state,
          jobsData: payload,
          isError:false
        };
      case JOBS_DATA_FAILURE:
        return {
          ...state,
          isError:true
        };
      
      
      default:
        return state;
    }
  };

  export default Jobsreducer