import { storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function uploadAvatar(uid, file){
  const r = ref(storage, `avatars/${uid}`);
  await uploadBytes(r, file);
  return getDownloadURL(r);
}