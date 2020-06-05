window.onload = function () {
  const cont = document.getElementById("abc");
  const button = document.getElementById("add");
  const submit = document.getElementById("contact-submit");
  const content = document.getElementById("i");

  button.onclick = function () {
    cont.innerHTML += `  <div style="display: inline-block;" class="user" id="abc">
    <fieldset class="user" id="o">
      <input
      id="a"
        style="width: 5.2cm;"
        placeholder="Organization name"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>
  <div style="display: inline-block;"></div>
  <div style="display: inline-block;" class="user">
    <fieldset class="user">
      <input
        style="width: 5.2cm;"
        placeholder="Degree type"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>
  <div style="display: inline-block;" class="user">
    <fieldset class="user">
      <input
        style="width: 5.2cm;"
        placeholder="Study Program"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>

  <div style="display: inline-block;"></div>
  <div style="display: inline-block;" class="user">
    <fieldset class="user">
      <input
        style="width: 5.2cm;"
        placeholder="%Age/Cgpa(Optional)"
        type="text"
        tabindex="5"
      />
    </fieldset>
  </div>
  <fieldset id="oo" class="user">
    From
    <input placeholder="from date" type="date" tabindex="5" required />

    - To
    <input placeholder="from date" type="date" tabindex="5" required />
    <input type="radio" /> Present
  </fieldset>

  <fieldset class="user">
    <textarea placeholder="Description(Optional)" tabindex="5"></textarea>
  </fieldset>

`;
  };
  submit.onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g");
    var h = document.getElementById("h").value;
    content.innerHTML += ` <br> Organization name : `;
    content.innerHTML += a;
    content.innerHTML += `<br>Degree type : `;
    content.innerHTML += b;
    content.innerHTML += `<br>Study Program : `;
    content.innerHTML += c;
    content.innerHTML += `<br>%Age/Cgpa : `;
    content.innerHTML += d;
    content.innerHTML += `<br>From : `;
    content.innerHTML += e;
    content.innerHTML += `   To : `;
    content.innerHTML += f;

    if (g.checked) {
      content.innerHTML += g.value;
    }

    content.innerHTML += `<br>Description : `;
    content.innerHTML += h;
  };
};
