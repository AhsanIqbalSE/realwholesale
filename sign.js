var firebaseConfig = {
    apiKey: "AIzaSyAHTlMERD-O6-CsgUP2H3yKq7lqyVokYr8",
    authDomain: "real-wholesale.firebaseapp.com",
    databaseURL: "https://real-wholesale.firebaseio.com",
    projectId: "real-wholesale",
    storageBucket: "real-wholesale.appspot.com",
    messagingSenderId: "504752072791",
    appId: "1:504752072791:web:cbc1465789c98494ce1b12",
    measurementId: "G-M15RLPMMTX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// var userArray = [];
// window.onload = init;

// var data;


function getdata() {

    var data = {
        signup_name: document.getElementById("signup_name").value,
        signup_email: document.getElementById("signup_email").value.trim(),
        signup_password: document.getElementById("signup_password").value,
        signup_repassword: document.getElementById("signup_repassword").value,
    }
    console.log("user", data);

    if (data.signup_name !== "" && data.signup_email !== "" && data.signup_password !== "" && data.signup_repassword !== "" && data.signup_password == data.signup_repassword) {
        firebase.auth().createUserWithEmailAndPassword(data.signup_email, data.signup_password)
            .then(function(success) {
                console.log('success', success);
                document.getElementById('signalert').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('signalert').style.display = 'none';
                    document.getElementById('id1').style.display = 'none';
                    document.getElementById('id2').style.display = 'block';
                }, 3000)
            })
            .catch(function(error) {
                console.log('error', error);
                console.log(error.message)
                document.getElementById('signup_emailerror').innerHTML = error.message
                document.getElementById('signup_emailerror').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('signup_emailerror').style.display = 'none';
                }, 3000)
            })


    } else {
        alert("Enter all field and both password must be match");
    }
    // } else {
    //     alert("user exist")
    // }
}

function googleSignup() {
    provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('success', result);
            document.getElementById('signalert').style.display = 'block';
            document.getElementById('id2').style.display = 'none';
            setTimeout(() => {
                    document.getElementById('signalert').style.display = 'none';;
                }, 3000)
                //
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log('error', error);
            console.log(error.message)
            document.getElementById('signin_error').innerHTML = error.message
            document.getElementById('signin_error').style.display = 'block';
            setTimeout(() => {
                document.getElementById('signin_error').style.display = 'none';
            }, 3000)
        });
}



function signin() {
    var data = {
        signin_email: document.getElementById("email").value.trim(),
        signin_password: document.getElementById("password").value,
    }
    console.log("user", data);
    firebase.auth().signInWithEmailAndPassword(data.signin_email, data.signin_password)
        .then(function(success) {
            console.log('success', success);
            // alert("successfully signin")
            document.getElementById("purchase").removeAttribute("onclick");
            document.getElementById("purchase").href = "check.html";
            document.getElementById('signinalert').style.display = 'block';
            signout = document.getElementById("signin_signout").innerHTML = "SIGN OUT";
            document.getElementById("signin_signout").href = "index.html";
            document.getElementById("signin_signout").removeAttribute("onclick");
            document.getElementById("signin_signout").setAttribute('onclick', 'logout()');

            setTimeout(() => {
                document.getElementById('signinalert').style.display = 'none';
                document.getElementById('id2').style.display = 'none';

            }, 2000)
        })
        .catch(function(error) {
            console.log('error', error);
            console.log(error.message)
                // alert(error.message)
            document.getElementById('signin_error').innerHTML = error.message
            document.getElementById('signin_error').style.display = 'block';
            document.getElementById('id2').style.display = 'block';
            setTimeout(() => {
                document.getElementById('signin_error').style.display = 'none';
            }, 3000)
        })
}

function logout() {
    firebase.auth().signOut().then(function() {
        alert("successfully log out");
        // Sign-out successful.
        signout = document.getElementById("signin_signout").innerHTML = "SIGN IN";
        document.getElementById("signin_signout").removeAttribute("onclick");
        document.getElementById("signin_signout").setAttribute("onclick", "document.getElementById('id2').style.display='block'");
        document.getElementById("purchase").href = "#";
        document.getElementById("purchase").setAttribute("onclick", "document.getElementById('id2').style.display='block'");
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}
checkLoginUser();

function checkLoginUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        window.user = user; // user is undefined if no user signed in
        console.log("state change", user);
        if (user !== null) {

            signout = document.getElementById("signin_signout").innerHTML = "SIGN OUT";
            document.getElementById("signin_signout").href = "index.html";
            document.getElementById("signin_signout").removeAttribute("onclick");
            document.getElementById("signin_signout").setAttribute('onclick', 'logout()');
            document.getElementById("purchase").removeAttribute("onclick");
            document.getElementById("purchase").href = "check.html";

        }
    });
}