import { Route, Routes } from "react-router-dom";
import TopNavigationBar from "./components/Navigation/TopNavigationBar";
import Homepage from "./pages/Home";
import BookCase from "./pages/Book";

function App() {
  return (
    <>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<BookCase />} />
        <Route path="*" element={<>Error page</>} />
      </Routes>
    </>
  );
}

export default App;
