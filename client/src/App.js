import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Essay from "./components/Essay";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import WritingPage from "./components/WritingPage";
import FeedPage from "./components/Feed";
import { AuthProvider } from "./contexts/authProvider";

function App() {
  // const deletePost = async (id) => {
  //   axios
  //     .delete(apiUrl + "/posts/" + id)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <AuthProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Personal account</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/essay">Essay</Link>
            </li>
            <li>
              <Link to="/writing">Writing</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
        <ul>
          {/*{posts.map((post) => (*/}
          {/*  <li key={post._id}>*/}
          {/*    body: {post.body}*/}
          {/*    <button onClick={() => deletePost(post._id)}>X</button>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>

        <Header />
        <Routes>
          <Route path="/essay" element={<Essay />} />
          <Route path="/profile" element={<Essay />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Essay />} />
        </Routes>
        {/*<Footer/>*/}
      </AuthProvider>
    </div>
  );
}

export default App;
