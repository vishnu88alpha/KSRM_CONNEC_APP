import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
/*ADD OWN GOOGLE FIREBASE API KEY*/
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
