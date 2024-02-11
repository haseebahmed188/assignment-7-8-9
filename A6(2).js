document.addEventListener("DOMContentLoaded", function() {
    const Div = document.getElementById("mydiv");

    Div.addEventListener("mouseenter", function() {
      Div.style.backgroundColor = "yellow";
    });

    Div.addEventListener("mouseleave", function() {
      Div.style.backgroundColor = "";
    });
  });