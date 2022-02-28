import { Route, Routes, Navigate } from "react-router-dom"

import Appsumo from "./routes/Appsumo";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Downloads from "./routes/Dashboard/Downloads";

function App() {
  return (

    <div className="App">
          <Routes>
            {/* Temporary redirect */}
              <Route path="/" element={<Navigate to="appsumo" />}/>
              <Route path="/appsumo" element={<Appsumo />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="downloads" element={<Downloads />}/>
              </Route>
              
          </Routes>
    </div>
  );
}

export default App;
