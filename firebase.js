// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWhopx2gKGaMDHnTL7g9MDC5mCR3hwiiQ",
    authDomain: "integrated-health-solution.firebaseapp.com",
    projectId: "integrated-health-solution",
    storageBucket: "integrated-health-solution.appspot.com",
    messagingSenderId: "78109388676",
    appId: "1:78109388676:web:25c92fc8d40b75fc7ef7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    if (!form) {
        console.error("Form not found! Make sure your HTML has an element with id='registration-form'");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get user input
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageBox = document.getElementById("message");

        if (!name || !phone || !email) {
            messageBox.innerText = "All fields are required!";
            return;
        }

        try {
            // Store data in Firestore
            await addDoc(collection(db, "users"), {
                name: name,
                phone: phone,
                email: email,
                timestamp: new Date()
            });

            messageBox.innerText = "Registration Successful!";
            form.reset(); // Clear form

            // Redirect after success (Optional)
            setTimeout(() => {
                window.location.href = "registration_page.html";
            }, 2000);

        } catch (error) {
            messageBox.innerText = "Error: " + error.message;
            console.error("Firestore Error:", error);
        }
    });
});

