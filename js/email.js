(function () {
  emailjs.init("SW-TFmvLfxwn5q1Dg");

  window.onload = function () {
    document.getElementById("workerForm").addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_2006", "template_su6ualn", this)
        .then(function () {
          alert("Registration sent to admin for approval.");
          document.getElementById("workerForm").reset();
        }, function (error) {
          alert("Error! Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
  };
})();
