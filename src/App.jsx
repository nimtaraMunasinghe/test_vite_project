import { Route, Routes } from "react-router-dom";
import VNavBar from "./components/VNavBar/VNavBar";
import Homepage from "./pages/Home";
import BookCase from "./pages/Book";

function App() {
  return (
    <>
      <VNavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<BookCase />} />
        <Route path="*" element={<>Error page</>} />
      </Routes>
    </>
  );
}

export default App;
