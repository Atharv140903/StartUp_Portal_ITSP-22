import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Aboutus from "./pages/Aboutus";
import StartupInfo from "./pages/StartupInfo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StartupList from "./pages/StartupList";

import { useSelector } from "react-redux";





const App = () => {
  const user = true;
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/startups/:category" element={<StartupList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/startup/:id" element={<StartupInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
