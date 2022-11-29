import './App.css';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';

// Firebase (getAuth)
const auth = getAuth(app);

function App() {
  // State
  const [user, setUser] = useState({});
  // provider (Google, GitHub)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Google Sign In Function
  const handleGoogleSignIn = () => {
    // Firebase (signInWithPopup)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  // Sign Out Function
  const handleSignOut = () => {
    // Firebase (Sign Out)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  // Sign In GitHub Function
  const handleGithubSignIn = () => {
    // Firebase (signInWithPopup)
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className='App'>
      <h1>React With Firebase</h1>
      {user.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>GitHub Sign In</button>
        </>
      )}
      {user.uid && (
        <div>
          <img src={user.photoURL} alt='profile' />
          <h3>User Name: {user.displayName}</h3>
          <h4>User Email: {user.email}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
