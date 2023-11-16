import Countries from "./Components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
