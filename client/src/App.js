import React from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Essay from "./Essay";
import Header from "./Header";
import SignUp from "./SignUp";

const apiUrl = "http://localhost:8080";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  const loadPosts = async () => {
    const res = await axios.get(apiUrl + "/posts");
    console.log(res.data.data.posts);
    setPosts(res.data.data.posts);
  };

  const loadUsers = async () => {
    const res = await axios.get(apiUrl + "/users");
    console.log(res.data.data.users);
    setUsers(res.data.data.users);
  };

  const deletePost = async (id) => {
    axios
      .delete(apiUrl + "/posts/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
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
            <Link to="/my-essay">My essay</Link>
          </li>
          <li>
            <Link to="/writing-settings">Writing settings</Link>
          </li>
          <li>
            <Link to="/writing">Writing</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            body: {post.body}
            <button onClick={() => deletePost(post._id)}>X</button>
          </li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user._id}>username: {user.username}</li>
        ))}
      </ul>

      <Header />
      <Routes>
        <Route path="/essay" element={<Essay />} />
        <Route path="/my-essay" element={<Essay />} />
        <Route path="/writing-settings" element={<Essay />} />
        <Route path="/profile" element={<Essay />} />
        <Route path="/feed" element={<Essay />} />
        <Route path="/writing" element={<Essay />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Essay />} />
      </Routes>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
