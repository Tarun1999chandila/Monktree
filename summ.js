window.onload = function () {
  const button = document.getElementById("contact-submit");
  const content = document.getElementById("ab");

  button.onclick = function (event) {
    event.preventDefault();
    var x = document.getElementById("r").value;

    content.innerHTML += `<br> Summary : `;
    content.innerHTML += x;
  };
};
