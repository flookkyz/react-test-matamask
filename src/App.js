import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land1 from "./components/Land1";
import Land2 from "./components/Land2";
import Land3 from "./components/Land3";
import Land4 from "./components/Land4";
import Metamask from "./components/Metamask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Metamask />
        <Routes>
          <Route path="" element={<Land1/>} />
          <Route path="/land2/:idland1" element={<Land2/>} />
          <Route exact path="/land3/:idland1:idland2" element={<Land3/>} />
          <Route
            exact
            path="/land4/:idland1:idland2:idland3"
            element={<Land4/>}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
