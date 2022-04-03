import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import MyNavbar from "./components/navbar/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyLogin from "./components/login/MyLogin";
import MySignUp from "./components/signUp/MySignUp";
import MyHome from "./components/main/MyHome";
import MYProfile from "./components/profile/MYProfile";
import MySettings from "./components/settings/MySettings";
import MyJobs from "./components/myjobs/MyJobs";
import AllCompanies from "./components/companies/AllCompanies";
import MyMessages from "./components/messages/MyMessages";
import MyCompanies from "./components/companies/MyCompanies";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <div style={{ paddingTop: "65px" }}>
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/login" element={<MyLogin />} />
            <Route path="/profile" element={<MYProfile />} />
            <Route path="/home" element={<MyHome />} />
            <Route path="/register" element={<MySignUp />} />
            <Route path="/settings" element={<MySettings />} />
            <Route path="/my-jobs" element={<MyJobs />} />
            <Route path="/companies" element={<AllCompanies />} />
            <Route path="/my-companies" element={<MyCompanies />} />
            <Route path="/messages" element={<MyMessages />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
