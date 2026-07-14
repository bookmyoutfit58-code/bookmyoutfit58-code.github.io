// SG Book My Outfit

document.addEventListener("DOMContentLoaded", () => {

  // Booking Form
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value;
      const phone = form.querySelector('input[type="tel"]').value;
      const date = form.querySelector('input[type="date"]').value;
      const dress = form.querySelector("select").value;
      const message = form.querySelector("textarea").value;

      const whatsappMessage =
`Hello SG Book My Outfit,

Name: ${name}
Phone: ${phone}
Event Date: ${date}
Dress: ${dress}

Message:
${message}`;

      const url =
        "https://wa.me/919113077945?text=" +
        encodeURIComponent(whatsappMessage);

      window.open(url, "_blank");
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
