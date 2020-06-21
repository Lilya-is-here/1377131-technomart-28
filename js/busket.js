var busketButton = document.querySelector(".catalog-button-purchase");

  var busketPopup = document.querySelector(".modal-busket");
  var busketClose = busketPopup.querySelector(".modal-close");
  
  busketButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    busketPopup.classList.add("modal-show");
  });

  busketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    busketPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (busketPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        busketPopup.classList.remove("modal-show");
      }
    }
  });