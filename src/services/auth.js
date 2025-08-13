import { auth, db } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider();

export function watchAuth(callback){
  return onAuthStateChanged(auth, async (user) => {
    if (user){
      // ensure profile doc
      const ref = doc(db, 'profiles', user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()){
        await setDoc(ref, {
          uid: user.uid,
          displayName: user.displayName || user.email.split('@')[0],
          avatarUrl: user.photoURL || '',
          platform: 'PC',
          specs: '',
          createdAt: Date.now(),
          points: 0,
        });
      }
    }
    callback(user || null);
  });
}

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const registerWithEmail = async (email, password, displayName) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) await updateProfile(cred.user, { displayName });
  return cred.user;
};
export const logout = () => signOut(auth);