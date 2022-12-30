document
  .getElementById("SubmitButton")
  .addEventListener("click", validateScheduleForm);
const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

function validateScheduleForm(e) {
  e.preventDefault();
  var f_name = document.forms["contactForm"]["firstName"].value;
  var l_name = document.forms["contactForm"]["lastName"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;
  var comment = document.forms["contactForm"]["comment"].value;
  if (f_name == "") {
    alert("First name must be provided");
  } else if (l_name == "") {
    alert("Last name must be provided");
  } else if (email == "") {
    alert("please provide a email");
  } else if (phone == "") {
    alert("please provide a phone number");
  } else if (comment == "") {
    alert("please provide your comment");
  } else {
    // Info@Fit.com.sa
    // window.open("mailto:abelteha@gmail.com");
    // window.open(
    //   `mailto:abelteha@gmail.com?subject=Schedule%20Service&body=Name:%20${name}%0ACompany/Institute:%20${company}%0AService%20Description:%20${describe}%0AService:%20${service}%0ADate:%20${date}`
    // );
    var params = {
      purpose: "Contact Us",
      first_name: f_name,
      last_name: l_name,
      email: email,
      phone: phone,
      comment: comment,
    };
    emailjs.send("service_9ysqjla", "template_kd4i28m", params).then(
      function (response) {
        alert("Successfully sent!");
      },
      function (error) {
        console.log(error.message);
        alert("Failed to send");
      }
    );
    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "borfonicon@gmail.com",
    //   Password: "F389DEACEACA0CF73CC7737447832E07BE70",
    //   To: "abelteha@gmail.com",
    //   From: "borfonicon@gmail.com",
    //   Subject: "Test email",
    //   Body: "testing",
    // }).then((message) => alert(message));
  }
}
