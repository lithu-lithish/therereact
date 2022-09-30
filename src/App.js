import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import List from "./pages/table/Table";
import New from "./pages/new/New";
import Addpack from "./pages/new/addPackage/Addpack";
import AddpackForm from "./pages/new/addPackage/AddpackForm";
import Packdetails from "./pages/new/packDetails/Packdetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Login />}  
            />
         </Route> 
         <Route path="/dashboard">
            <Route index element={<Dashboard />}  
            />
         </Route> 

            <Route path="/registration">
              <Route index element={<New />}
              />
            </Route>

            <Route path="/addpack">
              <Route index element={<Addpack />}
              />
            </Route>

            <Route path="/addpackform">
              <Route index element={<AddpackForm />}
              />
            </Route>

            <Route path ="/packdetails">
              <Route index element={<Packdetails/>}
              />
            </Route>

            <Route path="/table">
            <Route index element={<List />}  
            />
         </Route>

       
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{/* <Route path="users">
<Route
  path="new"
  element={<New />}
/>
</Route> */}

export default App;
