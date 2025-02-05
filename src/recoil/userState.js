// src/recoil/userState.js
import { atom } from 'recoil';
export const userState = atom({
  key: 'userState', 
  default: JSON.parse(localStorage.getItem('user')) || null, 
});
