import C from './constants';

// ACTION CREATORS
// Update these to control the proper piece of state
export function setTip(tip){
  return {
    type: C.SET_TIP,
    payload: tip
  }
}
export function setBill(bill){
  return {
    type: C.SET_BILL,
    payload: bill
  }
}
export function setSplit(split){
  return {
    type: C.SET_SPLIT,
    payload: split
  }
}
export function setResult(result){
  return {
    type: C.SET_RESULT,
    payload: result,
  }
}
export function setStep(step){
  return {
    type: C.SET_STEP,
    payload: step,
  }
}
export function setMood(tip){
  return {
    type: C.SET_MOOD,
    payload: tip,
  }
}
export function setError(error){
  return {
    type: C.SET_ERROR,
    payload: error,
  }
}
export function clearError(){
  return {
    type: C.CLEAR_ERROR,
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
  tip: 15,
  split: 1,
  bill: 0,
  result: 0,
  step: 1,
  isError: false,
  error: null,
  mood: '😐',
}

// REDUCER(S)
export default function tipReducer(state=initialState, action){
  switch(action.type){
    case C.SET_TIP:
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
        tip: action.payload,
        mood
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
    case C.SET_MOOD:
      // let mood = '😐';
      // switch(true){
      //   case (action.payload <= 9):
      //     mood = '😢';
      //     break;
      //   case (action.payload >= 20 && action.payload < 30):
      //     mood = '🙂'
      //     break;
      //   case (action.payload >= 30):
      //     mood= '😆';
      //     break;
      //   default:
      //     mood= '😐';
      // }
      return {
        ...state,
        mood
      }
     
    default:
      return state
  }
}