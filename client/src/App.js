import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Essay from "./components/Essay";
import Header from "./components/Header";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import FeedPage from "./components/FeedPage/index";
import { AuthProvider } from "./contexts/authProvider";
import ProfilePage from "./components/ProfilePage/index";
import WritingPage from "./components/WritingPage/index";
import EssayPage from "./components/EssayPage";

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className="py-4">
        <Routes>
          <Route path="/essays/:essayId" element={<EssayPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/registration" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/" element={<Essay />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
