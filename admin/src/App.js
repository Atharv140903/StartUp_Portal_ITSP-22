import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { startupInputs, userInputs } from "./formSource";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
            </Route>
            <Route path="startups">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={startupInputs} title="Add new Startup" />} />
            </Route>
            <Route path="blogs">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
           </Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
