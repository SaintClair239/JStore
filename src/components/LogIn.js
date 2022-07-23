import { useRef, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const errorHandler = error => {
    if (error.code === 'auth/user-not-found') {
      setError('User is not found.');
    } else if (error.code === 'auth/email-already-in-use') {
      setError('Email is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      setError('Email is invalid');
    } else if (error.code === 'auth/invalid-credential') {
      setError('Credentials are invalid.');
    } else if (error.code === 'auth/wrong-password') {
      setError('Wrong password.');
    } else if (error.code === 'auth/user-mismatch') {
      setError('User mismatch');
    } else if (error.code === 'auth/weak-password') {
      setError('Password too weak.');
    } else {
      setError(error.message);
    }

    console.log(error.code);
  };

  const signUp = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        const user = userCredential.user;
        navigate(-1);
      })
      .catch(error => {
        errorHandler(error);
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
        const user = userCredential.user;
        navigate(-1);
      })
      .catch(error => {
        errorHandler(error);
      });
  };

  const siginInWithGoogle = e => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        navigate(-1);
      })
      .catch(error => {
        errorHandler(error);
      });
  };

  const signInAsGuest = () => {
    signInAnonymously(auth)
      .then(navigate(-1))
      .catch(error => {
        errorHandler(error);
      });
  };

  return (
    <>
      <div className='bg-white p-[5%] rounded-2xl  w-full max-w-xl'>
        <h1 className='font-bold uppercase'>Sign up or sign in. </h1>
        <p className='text-red-600'>{error}</p>
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
};

export default LogIn;
