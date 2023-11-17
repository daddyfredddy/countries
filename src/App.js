import Countries from "./Components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import OneCountry from "./Components/OneCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<OneCountry />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
