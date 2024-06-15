import { configureStore } from "@reduxjs/toolkit";
import leadSlice from "../slice/slice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "app/saga/leadRootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    lead: leadSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
