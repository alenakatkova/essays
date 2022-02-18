import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Essay from "./components/Essay";
import Header from "./components/Header";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import WritingPage from "./components/WritingPage";
import FeedPage from "./components/FeedPage";
import { AuthProvider } from "./contexts/authProvider";
import Profile from "./components/ProfilePage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <div className="py-4">
          <Routes>
            <Route path="/essay" element={<Essay />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/registration" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/" element={<Essay />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
