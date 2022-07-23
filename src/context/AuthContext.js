import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      onAuthStateChanged(auth, user => {
        if (user) {
          const uid = user.uid;
          setCurrentUser(uid);
        } else {
          setCurrentUser(null);
        }
      });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
