import React from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../api/APIUtils";
import { createUser } from "../api/UserAPI";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingInitial, setLoadingInitial] = React.useState(true);

  // const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (error) setError(null);
  }, [location.pathname, error]);

  const getCurrentSession = React.useCallback(async () => {
    try {
      const fetchedData = await instance.get("/current_session"); // TODO перенести в API
      setUser(fetchedData.data.data.userInfo);
      setIsAuthenticated(fetchedData.data.data.userInfo !== null);
    } catch (err) {
      throw new Error("fail");
    } finally {
      setLoadingInitial(false);
    }
  }, []);

  React.useEffect(() => {
    getCurrentSession();
  }, [location.pathname]);

  const signUp = (username, password) => {
    setLoading(true);
    createUser(username, password)
      .then((user) => {
        setUser(user);
        setIsAuthenticated(true);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoedValue = React.useMemo(
    () => ({
      user,
      loading,
      error,
      signUp,
      isAuthenticated,
    }),
    [user, isAuthenticated, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
