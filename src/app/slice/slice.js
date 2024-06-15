import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lead: [],
  data: [],
  error: null,
  isLoading: false,
  DeleteInfo: {},
  editObj: {},
  AddEditInfo: {}
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
  AddEditInfoError
} = leadSlice.actions;

export default leadSlice.reducer;
