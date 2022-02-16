import React from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Essay from "./components/Essay";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import WritingPage from "./components/WritingPage";
import FeedPage from "./components/Feed";
import { AuthProvider, useAuth } from "./contexts/authProvider";

function RequireAuth({ children }) {
  let auth = useAuth();
  //  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  // const [users, setUsers] = React.useState([]);
  // const [tests, setTests] = React.useState([]);

  React.useEffect(() => {
    // loadTests();
    // loadUsers();
  }, []);

  // const loadTests = async () => {
  //   const res = await axios.get(apiUrl + "/tests");
  //   console.log(res.data.data.tests);
  //   setTests(res.data.data.tests);
  // };
  //
  // const loadUsers = async () => {
  //   const res = await axios.get(apiUrl + "/users");
  //   //console.log(res.data.data.users);
  //   setUsers(res.data.data.users);
  // };

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
          {/*{posts.map((post) => (*/}
          {/*  <li key={post._id}>*/}
          {/*    body: {post.body}*/}
          {/*    <button onClick={() => deletePost(post._id)}>X</button>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>

        {/*<ul>*/}
        {/*  {users.map((user) => (*/}
        {/*    <li key={user._id}>name: {user.username}</li>*/}
        {/*  ))}*/}
        {/*</ul>*/}

        {/*<ul>*/}
        {/*  {tests.map((test) => (*/}
        {/*    <li key={test._id}>*/}
        {/*      name: {test.name} {test._id}*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}

        <Header />
        <Routes>
          <Route path="/essay" element={<Essay />} />
          <Route path="/my-essay" element={<Essay />} />
          <Route path="/writing-settings" element={<Essay />} />
          <Route path="/profile" element={<Essay />} />
          <Route
            path="/feed"
            element={
              <RequireAuth>
                <FeedPage />
              </RequireAuth>
            }
          />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Essay />} />
        </Routes>
        {/*<Footer/>*/}
      </AuthProvider>
    </div>
  );
}

export default App;
