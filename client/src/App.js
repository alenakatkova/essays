import React from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Essay from "./Essay";

const apiUrl = "http://localhost:8080";

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const res = await axios.get(apiUrl + "/posts");
    console.log(res.data.data.posts);
    setPosts(res.data.data.posts);
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
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>body: {post.body}</li>
        ))}
      </ul>

      {/*<Header/>*/}
      <Routes>
        <Route path="/essay" element={<Essay />} />
        <Route path="/my-essay" element={<Essay />} />
        <Route path="/writing-settings" element={<Essay />} />
        <Route path="/profile" element={<Essay />} />
        <Route path="/feed" element={<Essay />} />
        <Route path="/writing" element={<Essay />} />
        <Route path="/signup" element={<Essay />} />
        <Route path="/" element={<Essay />} />
      </Routes>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
