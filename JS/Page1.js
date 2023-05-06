// ============================
// JS Code for Email Box 
// ==============================

// function sendEmail() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const subject = "New Contact Message from " + name;
//     const body = "Name: " + name + "\nEmail: " + email + "\n\nMessage: \n" + message;
//     const mailtoLink = "mailto:abc@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
//     window.location.href = mailtoLink;

// //   window.open(mailtoLink);
//   }

let name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const subject = "New Contact Message from " + name;
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "devalujjwal.2000@gmail.com",
        Password: "kjyhowspferuwval",
        To: 'ujjwaldeval.2000@gmail.com',
        From: email,
        Subject: subject,
        Body: message,
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}