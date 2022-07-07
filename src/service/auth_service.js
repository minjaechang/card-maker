import firebase from 'firebase';
import firebaseApp from './firebase';

export default class AuthService {
  login(providerName) {
    // format like:
    // const provider = new firebase.auth.GoogleAuthProvider();
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}
