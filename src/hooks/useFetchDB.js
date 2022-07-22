import { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase-config';

const useFetchDB = (initialValue, endpoint) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    let ignore = true;
    if (ignore) {
      onValue(ref(db, endpoint), snapshot => {
        const data = snapshot.val();
        setState(data);
      });
    }
    return () => {
      ignore = false;
    };
  }, [endpoint]);

  return [state, setState];
};

export default useFetchDB;
