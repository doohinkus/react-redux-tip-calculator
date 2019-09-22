import C from './constants';

// ACTION CREATORS
// Update these to control the proper piece of state
export function setTip(tip){
  return {
    type: C.SET_TIP,
    tip,
  }
}
export function setBill(bill){
  return {
    type: C.SET_BILL,
    bill,
  }
}
export function setSplit(split){
  return {
    type: C.SET_SPLIT,
    split,
  }
}
export function setResult(result){
  return {
    type: C.SET_RESULT,
    result,
  }
}
export function setStep(step){
  return {
    type: C.SET_STEP,
    step,
  }
}
export function setMood(mood){
  return {
    type: C.SET_MOOD,
    mood,
  }
}

// INITIAL STATE
const initialState = {
  tip: 0,
  split: 0,
  bill: 0,
  result: 0,
  step: 0,
  isError: false,
  error: "",
  emojis: ['😢', '😐', '🙂', '😆'],
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
    case C.SET_STEP:
      return {
        ...state,
        step: action.payload
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
    default:
      return state
  }
}