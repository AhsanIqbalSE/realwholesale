function forgot() {
    var auth = firebase.auth();
    var email = document.getElementById('forgotPassword').value.trim();
    if (email != "") {
        auth.sendPasswordResetEmail(email).then(function() {
                alert("Email has been sent to you ,please check and verify.");
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                // ...
                console.log('error', error);
                console.log(error.message);
                document.getElementById('forgoterror_noaccount').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('forgoterror_noaccount').style.display = 'none';
                }, 3000)
            });
    } else {
        // window.alert("please write your email");
        document.getElementById('forgoterror').style.display = 'block';
        setTimeout(() => {
            document.getElementById('forgoterror').style.display = 'none';
        }, 3000)
    }
}