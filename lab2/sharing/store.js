import { createSlice, configureStore } from '@reduxjs/toolkit';

// Tạo slice cho contacts
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchContactsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchContactsError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Xuất các action creator
export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } = contactsSlice.actions;

// Tạo store và cấu hình reducer
const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store
