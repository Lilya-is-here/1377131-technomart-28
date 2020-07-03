var writeUsLink = document.querySelector(".contacts-button");
var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close");
var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var writeUsName = writeUsPopup.querySelector(".write-us-name");
var writeUsEmail = writeUsPopup.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";


try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeUsPopup.classList.add("modal-show");
	if (storage) {
		writeUsName.value = storage;
		writeUsEmail.focus();
	} else {
		writeUsName.focus();
	}
});


writeUsClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove("modal-show");
	writeUsPopup.classList.remove("modal-error");

});


writeUsForm.addEventListener("submit", function(evt) {
	if (!writeUsName.value || !writeUsEmail.value) {
		evt.preventDefault();

		writeUsPopup.classList.remove("modal-error");
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add("modal-error");

	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", writeUsName.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (writeUsPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			writeUsPopup.classList.remove("modal-show");
			writeUsPopup.classList.remove("modal-error");
		}
	}
});