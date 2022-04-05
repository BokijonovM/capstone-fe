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
import AddCompany from "./components/companies/AddCompany";
import SingleCompany from "./components/companies/SingleCompany";
import JobDetails from "./components/myjobs/JobDetails";
import MyJDetails from "./components/myjobs/MyJDetails";

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
            <Route path="/companies/:id" element={<SingleCompany />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/my-jobs/:id" element={<MyJDetails />} />
            <Route path="/my-companies" element={<MyCompanies />} />
            <Route path="/add-companies" element={<AddCompany />} />
            <Route path="/messages" element={<MyMessages />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
