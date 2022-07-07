import firebase from 'firebase';

export default class AuthService {
  login(providerName) {
    // format like:
    // const provider = new firebase.auth.GoogleAuthProvider();
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}
