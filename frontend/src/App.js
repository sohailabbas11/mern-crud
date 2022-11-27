import Add from "./pages/Add";
import Update from "./pages/Update";
import Books from "./pages/Books";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App h-[100vh] p-[0 100px] flex items-center justify-center text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
