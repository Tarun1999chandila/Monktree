window.onload = function () {
  const button = document.getElementById("contact-submit");
  const content = document.getElementById("i");

  button.onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementsByName("t");
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g").value;
    var h = document.getElementById("h").value;
    for (j = 0; j < d.length; j++)
      if (d[j].checked) content.innerHTML = "<br> Gender : " + d[j].value;
    content.innerHTML += ` <br> Name : `;
    content.innerHTML += a;
    content.innerHTML += `<br>Occupation : `;
    content.innerHTML += b;
    content.innerHTML += `<br>Phone no : `;
    content.innerHTML += c;

    content.innerHTML += `<br>Email id : `;
    content.innerHTML += e;
    content.innerHTML += `<br>Github : `;
    content.innerHTML += f;
    content.innerHTML += `<br>LinkedIn : `;
    content.innerHTML += g;
    content.innerHTML += `<br>Address : `;
    content.innerHTML += h;
  };
};
