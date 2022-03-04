import { Route, Routes, Navigate } from "react-router-dom"

import Appsumo from "./routes/Appsumo";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Downloads from "./routes/Dashboard/Downloads";
import Products from "./routes/Dashboard/Products";
import Account from "./routes/Dashboard/Account";
import Support from "./routes/Dashboard/Support";

function App() {
  return (
    // https://avatars.dicebear.com/api/avataaars/ab.svg
    <div className="App">
          <Routes>
            {/* Temporary redirect */}
              <Route path="/" element={<Navigate to="appsumo" />}/>
              <Route path="/appsumo" element={<Appsumo />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="" element={<Navigate to="account" />}/>
                <Route path="downloads" element={<Downloads />}/>
                <Route path="products" element={<Products />}/>
                <Route path="account" element={<Account />}/>
                <Route path="support" element={<Support />}/>
              </Route>
              
          </Routes>
    </div>
  );
}

export default App;
