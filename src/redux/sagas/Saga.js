
import { put, takeEvery, all, call } from "redux-saga/effects";
import { setToken } from "../../Common/Cookies/Cookies";
import { ToastNotify } from "../../Common/Tosti/Toast";
import {  deleteCategoryServices,
          getCounOfTabelServices,
          getGraphOfTabelServices, 
          getListOfTabelServices,
         getLoginServices, 
         getRegistraionOfTabelServices,
         postAddCategoryServices,
         postListOfCategoryServices,
         prodectServices,
         putEditCategoryServices} from "../../services/services";
import { addCategory, counOfData,
        deleteCategory,
        editCategory,
        graphOfData,
        listOfCategory,
        listOfTabel, 
        listproduct, 
        loginUser, 
        registrationOfTabel, 
        setAddCategory, 
        setCounOfData, 
        setDeleteCategory, 
        setEditCategory, 
        setGraphOfData, 
        setListOfCategory, 
        setListOfTabel, 
        setListproduct, 
        setRegistrationOfTabel} from "../store/slice";

function* useAuthUserSaga(props) {
    try {
      const body = {

        email_id: props?.payload?.email_id,
        password: props?.payload?.password,
        role:props?.payload?.role
      };
      const response = yield call(getLoginServices, body);
    console.log(response,"responseAuthSaga");
    console.log(response,"res");
      yield call(setToken, response?.data?.token);
      // yield localStorage.setItem("token",response?.data?.token);
      // yield localStorage.getItem("token",response?.data?.token);
      // localStorage.removeItem("token",response?.data?.token);
      if (response?.data?.token) {
        ToastNotify(response?.message, "success");
      }
      return response;
    } catch (error) {
      ToastNotify(error?.message, "error");
     
    }
  
  }
// function* loginSaga (props) {
//     console.log(props.payload,"propsSaga")
//     try {
//         const response = yield call(getLoginServices, props.payload,);
//         console.log(response,"res")
//         yield put(setLoginUser(response));
//         return response;
//     }catch (e) {
//         console.log(e);
//       }
// }

//Dashbord
function*counOfDataSaga () {
  try {
    const response = yield call (getCounOfTabelServices);
    console.log(response,"res");
    yield put (setCounOfData(response));
    return response;
  }catch (e) {
    console.log(e);
  }
}

function*graphOfDataSaga () {
  try {
    const response = yield call (getGraphOfTabelServices);
    yield put (setGraphOfData(response))
    return response;
  }catch (e) {
    console.log(e);
  }
}

function*registraionSaga (){
  try {
    const response = yield call (getRegistraionOfTabelServices)
    yield put (setRegistrationOfTabel(response))
    return response;
  }catch (e) {
    console.log(e);
  }
}
function*listOfSaga () {
  try {
    const response = yield call (getListOfTabelServices);
    yield put (setListOfTabel(response));
    return response;
  }catch (e) {
    console.log(e);
  }
}

// Catgory
function*addCategorySaga (props) {
  console.log(props.payload,"prosssss")
  try{
    const response = yield call (postAddCategoryServices,props.payload)
    yield put (setAddCategory(response))
    return response;
  }catch(e) {
    console.log(e);
  }
}

function*listCategorySaga ( props) {
  const model = {
    model: "Category",
    condition: { is_archived: false },
    limit: 500,
  };
  try{
    const response = yield call (postListOfCategoryServices,model)
    yield put (setListOfCategory(response))
    return response;
  }catch(e) {
    console.log(e);
  }
}

function*editCategorySaga () {
  try{
    const response = yield call (putEditCategoryServices)
    yield put (setEditCategory(response))
    return response;
  }catch(e) {
    console.log(e);
  }
}
function*deleteCategorySaga (props) {
  console.log(props.payload,"payy")
  try{
   
    const response = yield call (deleteCategoryServices,props.payload)
    yield put (setDeleteCategory(response))
    return response;
  }catch(e) {
    console.log(e);
  }
}
//product
function*productListSaga (props) {
  try{
    const response = yield call (prodectServices,props)
    yield put (setListproduct(response))
    return response;
  }catch(e) {
    console.log(e);
  }
}

export default function* Saga() {
    yield all([
        yield takeEvery (loginUser.type,useAuthUserSaga),
        yield takeEvery ( listOfTabel.type,listOfSaga),
        yield takeEvery ( counOfData.type,counOfDataSaga),
        yield takeEvery (graphOfData.type,graphOfDataSaga),
        yield takeEvery (registrationOfTabel.type,registraionSaga),
        yield takeEvery (addCategory.type,addCategorySaga),
        yield takeEvery (listOfCategory.type,listCategorySaga),
        yield takeEvery (editCategory.type,editCategorySaga),
        yield takeEvery (deleteCategory.type,deleteCategorySaga),
        yield takeEvery (listproduct.type,productListSaga ),
    ]);
}