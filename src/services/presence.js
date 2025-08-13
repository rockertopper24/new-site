import { rtdb, auth } from './firebaseConfig';
import { ref, onDisconnect, onValue, serverTimestamp, set } from 'firebase/database';

export function initPresence(){
  const user = auth.currentUser;
  if (!user) return;
  const statusRef = ref(rtdb, `status/${user.uid}`);
  set(statusRef, { state: 'online', last_changed: serverTimestamp() });
  onDisconnect(statusRef).set({ state: 'offline', last_changed: serverTimestamp() });
}

export function watchOnlineUsers(cb){
  const statusRef = ref(rtdb, 'status');
  return onValue(statusRef, (snap)=>{
    const val = snap.val() || {};
    const list = Object.entries(val).filter(([,v])=>v.state==='online').map(([uid])=>uid);
    cb(list);
  });
}