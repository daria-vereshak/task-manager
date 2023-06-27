import { asyncSignIn, asyncSignUp } from "../store/slices/authorization/authorization-slice"

export const onSubmit = (typeForm, dispatch, event) => {
  event.preventDefault();
  if (typeForm === 'reg') {
    dispatch(asyncSignUp());
    //dispatch(toggle(asyncExit));
  }
  else if (typeForm === 'auth') {
    dispatch(asyncSignIn())
    //dispatch(as)
  }
  // else if (typeForm === 'exit') {
  //   dispatch(asyncExit())
  // }
  
}