import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import MyNavbar from "./components/navbar/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyLogin from "./components/login/MyLogin";
import MySignUp from "./components/signUp/MySignUp";
import MyHome from "./components/main/MyHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <div style={{ paddingTop: "65px" }}>
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/login" element={<MyLogin />} />
            <Route path="/home" element={<MyHome />} />
            <Route path="/register" element={<MySignUp />} />
          </Routes>
        </div>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
