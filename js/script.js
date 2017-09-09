var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-contact-form");
var close = popup.querySelector(".modal-close");
  
var form = popup.querySelector(".contact-form");
var userName = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var textarea = popup.querySelector("[name=message]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    userName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !mail.value || !textarea.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } 
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});