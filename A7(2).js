document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("togglebutton");
    const hiddenDiv = document.getElementById("hiddendiv");

    toggleButton.addEventListener("click", function() {
      hiddenDiv.classList.toggle("hidden");
    });
  });