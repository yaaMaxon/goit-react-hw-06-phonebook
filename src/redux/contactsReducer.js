import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
  contacts: [],
  filter: ""
}


const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
       state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
       state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterUpdate(state, action) {
        state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, filterUpdate } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;