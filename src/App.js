import { Route, Routes, Navigate } from "react-router-dom"

import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Downloads from "./routes/Dashboard/Downloads";
import Products from "./routes/Dashboard/Products";
import Account from "./routes/Dashboard/Account";
import Support from "./routes/Dashboard/Support";
import WorkMate from "./routes/Dashboard/Products/WorkMate";
import Commerce from "./routes/Dashboard/Products/Commerce";


import AppSumoLogin  from "./routes/AppSumo/Login";
import Redeem from "./routes/AppSumo/Redeem";
import Upgrade from "./routes/AppSumo/Upgrade";


function App() {

  return (
    <div className="App">
          <Routes>
            {/* Temporary redirect */}
              <Route path="/" element={<Navigate to="login" />}/>

              <Route path="/appsumo">
                <Route path="" element={<Navigate to="redeem" />} />
                <Route path="redeem" element={<Redeem />}/>
                <Route path="login" element={<AppSumoLogin />}/>
                <Route path="upgrade" element={<Upgrade />}/>
              </Route>

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard" element={<Dashboard/>}>

                <Route path="" element={<Navigate to="account" />}/>
                <Route path="downloads" element={<Downloads />}/>

                <Route path="products" >
                  <Route path="" element={<Products />}/>
                  <Route path="workmate" element={<WorkMate/>}/>
                  <Route path="commerce" element={<Commerce/>}/>
                </Route>

                <Route path="account" element={<Account />}/>
                <Route path="support" element={<Support />}/>
              </Route>
              
          </Routes>
    </div>
  );
}

export default App;
