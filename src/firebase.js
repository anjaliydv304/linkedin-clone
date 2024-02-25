import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDzj-keVl1HAbHWsaZftun4hrjNaymrfpg",
    authDomain: "linkedin-clone-21fe1.firebaseapp.com",
    projectId: "linkedin-clone-21fe1",
    storageBucket: "linkedin-clone-21fe1.appspot.com",
    messagingSenderId: "420553271792",
    appId: "1:420553271792:web:cd75e795a14dfdbb4fd535"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};