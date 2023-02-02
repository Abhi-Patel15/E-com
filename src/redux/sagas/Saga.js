import { put, takeEvery, all, call } from "redux-saga/effects";
import { getLogin } from "../../services/services";
import { loginUser, setLoginUser } from "../store/slice";

function* loginSaga (props) {
    try {
        const response = yield call(getLogin, props);
        yield put(setLoginUser(response));
        return response;
    }catch (e) {
        console.log(e);
      }
}

export default function* Saga() {
    yield all([
        yield takeEvery (loginUser.type,loginSaga)
    ]);
}