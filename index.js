var splide = new Splide(".splide", {
  type: "loop",
  padding: "5rem",
  perMove: 1,
  gap: "20rem",
  drag: true,
  snap: true,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 1, // Display 1 slide on viewport widths equal to or smaller than 768px
    },
  },
});

splide.mount();
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function sendEmail() {
  var recipient = "radiantpower11@gmail.com";
  var mailto = "mailto:" + recipient;
  window.location.href = mailto;
}
function redirectToMaps() {
  var location =
    "No 11 OlaJesu Elias Estate.God First Ikorodu-Owode Road,Lagos, Nigeria.";
  var encodedLocation = encodeURIComponent(location);
  var mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" + encodedLocation;
  window.location.href = mapsUrl;
}
