import React from "react";
import axios from "axios";
import "./App.css";

const apiUrl = "http://localhost:8080";

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const res = await axios.get(apiUrl + "/posts");
    console.log(res.data.data.posts)
    setPosts(res.data.data.posts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {posts.map(post => (
              <li key={post._id}>body: {post.body}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
