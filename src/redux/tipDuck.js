import C from './constants';

// ACTION CREATORS
// Update these to control the proper piece of state
export function setTip(tip){
  return {
    type: C.SET_TIP,
    payload: tip,
  }
}
export function setBill(bill){
  return {
    type: C.SET_BILL,
    payload: bill,
  }
}
export function setSplit(split){
  return {
    type: C.SET_SPLIT,
    payload: split,
  }
}
export function setResult(result){
  return {
    type: C.SET_RESULT,
    payload: result,
  }
}
export function setRoute(route){
  return {
    type: C.SET_ROUTE,
    payload: route,
  }
}
export function setMood(mood){
  return {
    type: C.SET_MOOD,
    payload: mood,
  }
}
export function openVenmo(){
  return {
    type: C.OPEN_VENMO,
    // hasVenmo: true
  }
}

// INITIAL STATE
const initialState = {
  tip: 0,
  split: 0,
  bill: 0,
  result: 0,
  route: "/",
  isError: false,
  error: "",
  mood: '😐',
}

// REDUCER(S)
export default function tipReducer(state=initialState, action){
  switch(action.type){
    case C.SET_TIP:
      return {
        ...state,
        tip: action.payload
      }
    case C.SET_BILL:
      return {
        ...state,
        bill: action.payload
      }
    case C.SET_RESULT:
      return {
        ...state,
        result: action.payload
      }
    case C.SET_SPLIT:
      return {
        ...state,
        split: action.payload
      }
    case C.SET_ROUTE:
      console.log("REDUCCER ", action)
      return {
        ...state,
        route: action.payload
      }
    case C.SET_ERROR:
      return {
        ...state,
        isError: true,
        error: action.payload 
      }
    case C.CLEAR_ERROR:
      return {
        ...state,
        isError: false,
        error: ""
      }
    case C.SET_MOOD:
      let mood = '😐';
      switch(true){
        case (action.payload <= 9):
          mood = '😢';
          break;
        case (action.payload >= 20 && action.payload < 30):
          mood = '🙂'
          break;
        case (action.payload >= 30):
          mood= '😆';
          break;
        default:
          mood= '😐';
      }
      return {
        ...state,
        mood
      }
     
    default:
      return state
  }
}