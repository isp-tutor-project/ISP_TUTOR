
// get handles for the various page elements
let notificationRegion = document.getElementById("notification_region");
let emailFld = document.getElementById("email");
let passwordFld = document.getElementById("password");
let loginBtn = document.getElementById("login");
let togglePasswordVisibilityBtn = document.getElementById("toggle_password_visibility");

/*
* Toggles the visibility of the password field
*/
function togglePasswordVisibility(e) {
    const checked = e.target.value;
    if ("on" === checked) {
        passwordFld.type = "text";
    } else {
        passwordFld.type = "password";
    }
}

/*
*  clears the notification region (used to display login errors)
*/
function clearNotificationRegion() {
    notificationRegion.innerHTML = "";
}

/*
* sends the user to whichever page they were attempting to access
* when they weren't authenticated and got redirected here.
*/
function redirectToPreviousPage() {
    let href = window.location.href;
    if (href.includes('?next=')) {
        let [hr, next] = href.split('?next=');
        window.location.href = next;
    } else {
        // hmm. I *suppose* I could look into the browser history
        // to return to the prev page
        return;
    }
}

/*
*  displays the login error messages in the notification region
*/
function loginErrorHandler(error) {
    console.error(error.code);
    console.error(error.message);
    notificationRegion.innerHTML = error.message;
}

/*
* parses login form, validates, and attempts to login to firebase
*/
function login(e) {
    e.preventDefault();
    let form = document.getElementById("login_form");
    if (! form.reportValidity()) {
        return;
    } else {
        let email = form.elements.email.value;
        let password = form.elements.password.value;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .then(redirectToPreviousPage, loginErrorHandler);
    }
}


// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log(user);
//         console.log('user is logged in');
//         console.log(window.location);
//     } else {
//         console.log('user is not signed in');
//     }
// });

/*
* setup event handlers
*/
loginBtn.addEventListener("click", e => login(e));
togglePasswordVisibilityBtn.addEventListener("change", e => togglePasswordVisibility(e));
emailFld.addEventListener("change", e => clearNotificationRegion());
passwordFld.addEventListener("change", e => clearNotificationRegion());