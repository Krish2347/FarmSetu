import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
apiKey: "AIzaSyBayrk9nQEKyx6LHuCvb-f39oAoPwYB5OQ",
authDomain: "test1-dd03a.firebaseapp.com",
projectId: "test1-dd03a",
storageBucket: "test1-dd03a.firebasestorage.app",
messagingSenderId: "521283409026",
appId: "1:521283409026:web:f45a1d69448192a05ed09b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// FETCH USER DATA
onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {

        const userDoc = await getDoc(
            doc(db, "farmer", user.uid)
        );

        if (userDoc.exists()) {

            const data = userDoc.data();

            console.log("User data:", data);

            // Put data on webpage
            document.getElementById("greeting").textContent =
                `Hello, ${data.name}`;
            document.getElementById("profile-name").textContent =
                `${data.name}`;

        } else {

            alert.log("User document not found");

        }

    } catch (error) {

        console.error("Error fetching data:", error);

    }

});