document
  .getElementById("submitButton")
  .addEventListener("click", validateScheduleForm);
const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let yearLater = date.getFullYear() + 1;

let currentDate = `${year}-${month}-${day}`;
let nextYear = `${yearLater}-${month}-${day}`;
document.getElementById("date").min = currentDate;
document.getElementById("date").max = nextYear;

function validateScheduleForm(e) {
  e.preventDefault();
  var name = document.forms["scheduleForm"]["name"].value;
  var company = document.forms["scheduleForm"]["company"].value;
  var service = document.forms["scheduleForm"]["service"].value;
  var date = document.forms["scheduleForm"]["date"].value;
  var describe = document.forms["scheduleForm"]["describe"].value;
  if (name == "") {
    alert("Name must be provided");
  } else if (company == "") {
    alert("Company must be provided");
  } else if (describe == "") {
    alert("please provide a description");
  } else if (service == "one") {
    alert("Select a service");
  } else if (date == "") {
    alert("Date must be selected");
  } else {
    // Info@Fit.com.sa
    // window.open("mailto:abelteha@gmail.com");
    // window.open(
    //   `mailto:abelteha@gmail.com?subject=Schedule%20Service&body=Name:%20${name}%0ACompany/Institute:%20${company}%0AService%20Description:%20${describe}%0AService:%20${service}%0ADate:%20${date}`
    // );
    var params = {
      purpose: "Schedule Service",
      from_name: name,
      institute: company,
      service_description: describe,
      service: service,
      date: date,
    };
    emailjs.send("service_9ysqjla", "template_inwr60z", params).then(
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
