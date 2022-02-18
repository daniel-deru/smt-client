import { Route, Routes } from "react-router-dom"

import Appsumo from "./routes/Appsumo";
import SignUp from "./routes/SignUp";


function App() {
  return (

    <div className="App">
          <Routes>
              <Route path="appsumo" element={<Appsumo/>}/>
              <Route path="signup" element={<SignUp/>}/>
          </Routes>
    </div>
  );
}

export default App;
