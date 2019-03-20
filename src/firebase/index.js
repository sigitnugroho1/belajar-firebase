import * as firebase from "firebase";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDDLbUqFZtxvb5815No8LBEVcSV0_ROGkE",
    authDomain: "fir-sekolah1.firebaseapp.com",
    databaseURL: "https://fir-sekolah1.firebaseio.com",
    projectId: "fir-sekolah1",
    storageBucket: "fir-sekolah1.appspot.com",
    messagingSenderId: "469646214220"
};
firebase.initializeApp(config);

export default firebase