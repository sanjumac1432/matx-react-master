import {
  AddEditInfoError,
  AddEditInfoRequest,
  AddEditInfoSuc,
  LeadError,
  LeadLoading,
  Leadsuc,
  callDetailsError,
  callDetailsRequest,
  callDetailsSuc,
  changeError,
  changeRequest,
  changeSuc,
  deleteError,
  deleteLoading,
  deleteSuc,
  editLeadRequest,
  editLeadRequestError,
  editLeadRequestSuccess,
  emailDetailsError,
  emailDetailsRequest,
  emailDetailsSuc,
  getLeadError,
  getLeadLoading,
  getLeadSuc
} from "app/slice/slice";
import addlead, {
  AddEditInfo,
  CallDetailsSend,
  changeStatus,
  deleteLead,
  editLead,
  getLead,
  sendEmailData
} from "app/leadservices/leadservice";
import { call, put, takeEvery } from "redux-saga/effects";
import { func } from "prop-types";

//function for post lead

function* asyncLead(ac) {
  try {
    let d = yield call(addlead, ac.payload);

    yield put(Leadsuc(d));
  } catch (error) {
    yield put(LeadError(error));
  }
}

export function* watcherLead() {
  yield takeEvery(LeadLoading().type, asyncLead);
}

//function for get lead

function* asyncLeadGet() {
  try {
    let t = yield call(getLead);
    yield put(getLeadSuc(t));
  } catch (error) {
    yield put(getLeadError(error));
  }
}
export function* watcherLeadGet() {
  yield takeEvery(getLeadLoading().type, asyncLeadGet);
}

// delete

function* asyncLeadDelete(action) {
  try {
    let t = yield call(deleteLead, action.payload);
    yield put(deleteSuc(t));
  } catch (error) {
    yield put(deleteError(error));
  }
}
export function* watcherLeadDelete() {
  yield takeEvery(deleteLoading().type, asyncLeadDelete);
}

// edit data Display code here

function* asyncLeadEdit(action) {
  try {
    let d1 = yield call(editLead, action.payload);
    yield put(editLeadRequestSuccess(d1));
  } catch (error) {
    yield put(editLeadRequestError(error));
  }
}

export function* watcherLeadEdit() {
  yield takeEvery(editLeadRequest().type, asyncLeadEdit);
}
//AddEditInfo code here

function* asyncLeadEditInfo(action) {
  try {
    let d1 = yield call(AddEditInfo, action.payload);
    yield put(AddEditInfoSuc(d1));
  } catch (error) {
    yield put(AddEditInfoError(error));
  }
}

export function* watcherLeadEditInfo() {
  yield takeEvery(AddEditInfoRequest().type, asyncLeadEditInfo);
}

function* asyncLeadChangeStatus(action) {
  try {
    let d1 = yield call(changeStatus, action.payload);
    yield put(changeSuc(d1));

    yield put(getLeadLoading());
  } catch (error) {
    yield put(changeError(error));
  }
}

export function* watcherLeadChangeStatus() {
  yield takeEvery(changeRequest().type, asyncLeadChangeStatus);
}


function* asyncCallLead(ac) {
  try {
    let d = yield call(CallDetailsSend, ac.payload);

    yield put(callDetailsSuc(d));
  } catch (error) {
    yield put(callDetailsError(error));
  }
}

export function* watcherCallLead() {
  yield takeEvery(callDetailsRequest().type, asyncCallLead);
}

function* asyncEmailData(ac){
try{
  let d = yield call( sendEmailData , ac.payload);
  yield put(emailDetailsSuc(d))
}
catch(error){
  yield put(emailDetailsError(error))
}
}

export function* watchEmailData(){
  yield takeEvery(emailDetailsRequest().type, asyncEmailData);
}