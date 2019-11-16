firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("username_region").innerHTML = `Welcome ${user.email}`;
        // console.log('user is logged in');
    } else {
        console.log('user is not signed in');
        window.location.href = '/authenticateUser.html?next=' + window.location.pathname;
    }
});

function signOut(e) {
    firebase.auth().signOut().then(function(){
        console.log("User logged out.");
    }).catch(function(error) {
        console.error(error);
    });
}

let signOutBtn = document.getElementById("sign_out_btn");
signOutBtn.addEventListener("click", e => signOut(e));
