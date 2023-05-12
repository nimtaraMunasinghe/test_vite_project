import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  deleteBook,
  editBook,
  getBooks,
} from "../../redux/features/bookSlice";
import { useFormik } from "formik";

const BookCase = () => {
  const books = useSelector(getBooks);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    author: "",
    genre: "",
    borrowedBy: "",
  };
  const onSubmit = (values) => {
    console.log("values in onSubmit : ", values);
    values?.id ? dispatch(editBook(values)) : dispatch(addBook(values));
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: null,
    validateOnChange: false,
    onSubmit,
  });
  const { values, handleSubmit, handleChange } = formik;
  const handleEdit = (id) => {
    const book = books.find((book) => book.id === id);
    formik.setValues(book);
  };
  return (
    <>
      {books?.map((book, key) => (
        <div key={key}>
          <h1>{book.name}</h1>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.borrowedBy.toString()}</p>
          <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
          <button onClick={() => handleEdit(book.id)}>Edit</button>
        </div>
      )) ?? <h1>No books</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={values.author}
          placeholder="Author"
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          value={values.genre}
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="borrowedBy"
          value={values.borrowedBy}
          placeholder="Borrowed By"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BookCase;
