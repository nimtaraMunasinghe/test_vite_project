import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
} from "../../redux/features/userSlice";
import { useFormik } from "formik";
import VButton from "../../components/VButton/VButton";
import { Paper, Typography } from "@mui/material";
import SingleRow from "../../components/SingleRow/SingleRow";
import Table from "../../components/Table/Table";

const Homepage = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    borrowedBooks: "",
  };
  const onSubmit = (values) => {
    console.log("values in onSubmit : ", values);
    values?.id ? dispatch(editUser(values)) : dispatch(addUser(values));
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
    const user = users.find((user) => user.id === id);
    formik.setValues(user);
  };
  return (
    <>
      {users?.map((user, key) => (
        <div key={key}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phoneNo}</p>
          <p>{user.borrowedBooks.toString()}</p>
          <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          <button onClick={() => handleEdit(user.id)}>Edit</button>
        </div>
      )) ?? <h1>No users</h1>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNo"
          value={values.phoneNo}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="borrowedBooks"
          value={values.borrowedBooks}
          placeholder="Borrowed Books"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <VButton
          label="Submit"
          buttonStyles={{
            py: 1,
            px: 4,
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "64px",
          }}
        />
      </form>
      <Table />
    </>
  );
};

export default Homepage;
