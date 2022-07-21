import { useRef, useEffect, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInAnonymously,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { onValue, ref, set } from 'firebase/database';
import { db } from '../firebase/firebase-config';
import CartContext from '../context/CartContext';

function LogIn() {
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const { setCurrentUser } = useContext(AuthContext);
  const { cartState } = useContext(CartContext);

  const addUserToDatabase = user => {
    let data = '';
    onValue(ref(db, 'users/' + user), snapshot => {
      data = snapshot.val();
    });

    if (!data) {
      set(ref(db, 'users/' + user), cartState);
    }
  };

  const signUp = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        addUserToDatabase(user.uid);
        navigate(-1);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(-1);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const siginInWithGoogle = e => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        addUserToDatabase(user.uid);
        navigate(-1);
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signInAsGuest = () => {
    signInAnonymously(auth)
      .then(userCredential => {
        const user = userCredential.user;

        addUserToDatabase(user.uid);
        navigate(-1);
        // Signed in..
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };

  return (
    <>
      <div className='bg-white p-[5%] rounded-2xl  w-full max-w-xl'>
        <h1>Sign up or sign in. </h1>
        <form className='flex flex-col mt-4'>
          <div className='my-4 flex flex-col'>
            <label htmlFor='email'>Email:</label>
            <input
              className='border-2 border-slate-400'
              type='email'
              id='email'
              ref={emailRef}
              required
            />
          </div>

          <div className='my-4 flex flex-col'>
            <label htmlFor='password'>Password:</label>
            <input
              className='border-2 border-slate-400'
              type='password'
              id='password'
              ref={passwordRef}
              required
            />
          </div>

          <button className='bg-blue-400 my-1 py-2 uppercase' onClick={signUp}>
            Sign up
          </button>
          <button className='bg-blue-400 my-1 py-2 uppercase' onClick={signIn}>
            Sign in
          </button>
          <button
            className='bg-slate-100 mt-1 py-2 uppercase'
            onClick={siginInWithGoogle}
          >
            Sign in with Google
          </button>
        </form>
        <button
          className='bg-green-300 py-2 uppercase w-full mt-2'
          onClick={signInAsGuest}
        >
          Sign in as Guest
        </button>
      </div>
    </>
  );
}

export default LogIn;
