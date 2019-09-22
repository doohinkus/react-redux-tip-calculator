import { connect } from 'react-redux';
import { 
  setTip,
  setBill,
  setMood,
  setSplit,
  setResult,
  setStep
 } from "./redux/tipDuck";

 import AppContainer from './containers/AppContainer';

 function mapStateToProps(state){
  return {
    state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setTip: (tip) => dispatch(setTip(tip)),
    setBill: (bill) => dispatch(setBill(bill)),
    setMood: (mood) => dispatch(setMood(mood)),
    setSplit: (split) => dispatch(setSplit(split)),
    setResult: (result) => dispatch(setResult(result)),
    setStep: (step) => dispatch(setStep(step)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);



