import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/main/MyMain";
import MyNavbar from "./components/navbar/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import MyLogin from "./components/login/MyLogin";
import MySignUp from "./components/signUp/MySignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/register" element={<MySignUp />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
