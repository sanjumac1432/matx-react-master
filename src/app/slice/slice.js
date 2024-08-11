import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  lead: [],
  data: [],
  error: null,
  isLoading: false,
  DeleteInfo: {},
  editObj: {},
  AddEditInfo: {},
  changeStatus: {},
  callDetails: {},
  emailDetails: {}
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    LeadLoading: (state, actions) => {
      state.isLoading = true;
    },
    Leadsuc: (state, actions) => {
      state.isLoading = false;
      state.lead = actions.payload;
    },
    LeadError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    getLeadLoading: (state, action) => {
      state.isLoading = true;
    },
    getLeadSuc: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getLeadError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteLoading: (state) => {
      state.isLoading = true;
    },
    deleteSuc: (state, action) => {
      state.isLoading = false;
      state.DeleteInfo = action.payload;
    },
    deleteError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    editLeadRequest: (state, actions) => {
      state.isLoading = true;
    },
    editLeadRequestError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    editLeadRequestSuccess: (state, actions) => {
      state.isLoading = false;
      state.editObj = actions.payload;
    },
    AddEditInfoRequest: (state, action) => {
      state.isLoading = true;
    },
    AddEditInfoSuc: (state, action) => {
      state.isLoading = false;
      state.AddEditInfo = action.payload;
    },
    AddEditInfoError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeRequest: (state, action) => {
      state.isLoading = true;
    },
    changeSuc: (state, action) => {
      state.isLoading = false;
      state.changeStatus = action.payload;
    },
    changeError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    callDetailsRequest: (state, action) => {
      state.isLoading = true;
    },
    callDetailsSuc: (state, action) => {
      state.isLoading = false;
      state.callDetails = action.payload;
    },
    callDetailsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    emailDetailsRequest: (state, action) => {
      state.isLoading = true;
    },
    emailDetailsSuc: (state, action) => {
      state.isLoading = false;
      state.emailDetails = action.payload;
    },
    emailDetailsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {
  LeadLoading,
  Leadsuc,
  LeadError,
  getLeadLoading,
  getLeadSuc,
  getLeadError,
  deleteLoading,
  deleteSuc,
  deleteError,
  editLeadRequest,
  editLeadRequestError,
  editLeadRequestSuccess,
  AddEditInfoRequest,
  AddEditInfoSuc,
  AddEditInfoError,
  changeError,
  changeRequest,
  changeSuc,
  callDetailsError,
  callDetailsSuc,
  callDetailsRequest,
  emailDetailsError,
  emailDetailsSuc,
  emailDetailsRequest
} = leadSlice.actions;

export default leadSlice.reducer;
