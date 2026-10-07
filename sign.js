// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const r_password = document.getElementById("r_password");
const r_button = document.getElementById("r_password-view");

r_button.onclick = () => {
    r_password.type = r_password.type === "password" ? "text" : "password";
};
import {initializeApp} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBayrk9nQEKyx6LHuCvb-f39oAoPwYB5OQ",
authDomain: "test1-dd03a.firebaseapp.com",
projectId: "test1-dd03a",
storageBucket: "test1-dd03a.firebasestorage.app",
messagingSenderId: "521283409026",
appId: "1:521283409026:web:f45a1d69448192a05ed09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById('register-form');
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById('r_name').value;
    const number = document.getElementById('r_number').value;
    const email = document.getElementById('r_email').value;
    const password = document.getElementById('r_password').value;
    if (number.length === 10) {
        
        try {
            // Creating account in firestore Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            //Creating user's document in firestore
            const account_type = document.getElementById('account-type-reg').value;
            const user = userCredential.user;
            await setDoc(doc(db, `${account_type}`, user.uid), {
                name: name,
                email: email,
                number: number
            });
            window.location.href = `${account_type}_dashboard.html`;
            console.log("user created");
        } catch (error) {
            console.error(error.code);
            console.error(error.message);
            alert(error.message);
        }
    }
    else{
        alert("Enter a Valid mobile number")
    }
})

//login

const password = document.getElementById("l_password");
const button = document.getElementById("password-view");

button.onclick = () => {
    password.type = password.type === "password" ? "text" : "password";
};

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("l_email").value;
    const password = document.getElementById("l_password").value;
    const account_type = document.getElementById('account-type-log').value;

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            const userDoc = await getDoc(
                doc(db, `${account_type}`, user.uid)
            );
            if (userDoc.exists()) {
                window.location.href = `${account_type}_dashboard.html`;
                console.log("Login successful");
            } else {
                alert("Account type doesn't match");
            }

    } catch (error) {
        alert('wrong credentials')
        console.error(error.code);
        alert.error(error.message);

    }

});