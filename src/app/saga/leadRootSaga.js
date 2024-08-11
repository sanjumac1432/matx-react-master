import { all } from "redux-saga/effects";

import {
  watcherCallLead,
  watcherLead,
  watcherLeadChangeStatus,
  watcherLeadDelete,
  watcherLeadEdit,
  watcherLeadEditInfo,
  watcherLeadGet
} from "./lead.saga";

function* rootSaga() {
  //watcherLeadChangeStatus()
  yield all([
    watcherLead(),
    watcherLeadGet(),
    watcherLeadDelete(),
    watcherLeadEdit(),
    watcherLeadEditInfo(),
    watcherLeadChangeStatus(),
    watcherCallLead()
  ]);
}

export default rootSaga;
