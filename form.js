// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCWjRGg5uSKJlSNfli8K6G_41VZCV0XEks",
    authDomain: "sliceoflife.firebaseapp.com",
    projectId: "sliceoflife",
    storageBucket: "sliceoflife.appspot.com",
    messagingSenderId: "637845046355",
    appId: "1:637845046355:web:1c7cf5cffaea208d06f2a6",
    measurementId: "G-XC9S88RKM6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    
    // Signup function
    function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(
        email.value,
        password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
    }
    
    // SignIN function
    function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(
                email.value, password.value);
    promise.catch((e) => alert(e.message));
    }
    
    // SignOut
    function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
    }
    
    // Active user to homepage
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
    } else {
        alert("No Active user Found");
    }
    });
    