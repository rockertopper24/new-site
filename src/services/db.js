import { db } from './firebaseConfig';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

export const postsCol = (board='general') => collection(db, `forums/${board}/posts`);

export async function createPost(board, { authorUid, authorName, title, body }){
  return addDoc(postsCol(board), {
    authorUid, authorName, title, body,
    createdAt: serverTimestamp(),
  });
}

export function watchPosts(board, callback){
  const q = query(postsCol(board), orderBy('createdAt','desc'));
  return onSnapshot(q, (snap)=>{
    const items = snap.docs.map(d=>({ id: d.id, ...d.data() }));
    callback(items);
  });
}