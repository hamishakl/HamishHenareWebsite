const success = () => {
  const message = document.getElementById("message");

  setTimeout(function () {
    message.style.opacity = "0";

    if (message.style.opacity == "0") {
      setTimeout(() => {
        message.style.display = "none";
      }, 1000);
    }
  }, 3000);
};

window.onload = () => {
  success();
};
