// ============================
// JS Code for Email Box 
// ==============================

let name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const subject = "New Contact Message from " + name;

function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "craftadcare@gmail.com",
      Password: "D2B22D7E02653E2AB75F864721F2305CDE12",
      To: 'chandujoshi386@gmail.com',
      From: 'craftadcare@gmail.com', // put a real email address that is verified
      Port: '2525',
      Subject: subject,
      Body: message,
    }).then(
      message => {
        alert("mail sent successfully");
        console.log(message);
      }
    );
  }

  // ============================================
//     Footer
//      ============================================

const footer = document.querySelector("footer");
const footerHeight = footer.offsetHeight;
document.body.style.paddingBottom = footerHeight + "px";