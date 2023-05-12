import { createAction, createSlice } from "@reduxjs/toolkit";

let initialState = {
  books: [],
};

export const addBook = createAction("book/addBook");
export const editBook = createAction("book/editBook");
export const deleteBook = createAction("book/deleteBook");

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook, (state, action) => {
      action.payload.id = state.books.length + 1;
      state.books.push(action.payload);
    });
    builder.addCase(editBook, (state, action) => {
      state.books = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    });
    builder.addCase(deleteBook, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    });
  },
});

export const getBooks = (state) => state.book.books;
export const getBookById = (id) => (state) =>
  state.book.books.find((book) => book.id === id);

export default bookSlice.reducer;
