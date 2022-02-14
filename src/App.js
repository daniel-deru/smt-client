import { Route, Routes } from "react-router-dom"

import Appsumo from "./routes/Appsumo";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="appsumo" element={<Appsumo/>}/>

        </Routes>
    </div>
  );
}

export default App;
