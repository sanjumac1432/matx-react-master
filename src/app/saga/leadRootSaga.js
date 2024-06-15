import { all } from "redux-saga/effects";

import { watcherLead, watcherLeadDelete, watcherLeadEdit, watcherLeadEditInfo, watcherLeadGet } from "./lead.saga";

function* rootSaga() {
  yield all([watcherLead(),watcherLeadGet(),watcherLeadDelete(),watcherLeadEdit(),watcherLeadEditInfo()]);
}

export default rootSaga;
