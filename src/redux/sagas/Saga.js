import { put, takeEvery, all, call } from "redux-saga/effects";
import { ToastNotify } from "../../Common/Tosti/Toast";
import {  getLoginServices } from "../../services/services";
import { loginUser, setLoginUser } from "../store/slice";

function* useAuthUserSaga(props) {
console.log(props,"propssaga");
    try {
      const body = {

        email_id: props?.payload?.email_id,
        password: props?.payload?.password,
        role:props?.payload?.role
      };
  
      const response = yield call(getLoginServices, body);
    // console.log(response,)
    console.log(response,"responseAuthSaga");
      yield call(setLoginUser, response?.data?.token);
      localStorage.setItem("token",response?.data?.token);
      localStorage.getItem("token",response?.data?.token);
      localStorage.removeItem("token",response?.data?.token);
      if (response?.data?.token) {
        ToastNotify(response?.message, "success");
        // window.location.reload();
      }
    } catch (error) {
      ToastNotify(error?.message, "error");
      return;
    }
  }
// function* loginSaga (props) {
//     console.log(props.payload,"propsSaga")
//     // const token = yield select(selectToken);
// //   const headerParams = {
//     // Authorization: `JWT ${token}`
// //   };
// // {headers:headerParams}
//     // try {
//     //     const response = yield call(getLogin, props.payload,);
//     //     console.log(response,"res")
//     //     yield put(setLoginUser(response));
//     //     return response;
//     // }catch (e) {
//     //     console.log(e);
//     //   }
// }

export default function* Saga() {
    yield all([
        yield takeEvery (loginUser.type,useAuthUserSaga)
    ]);
}