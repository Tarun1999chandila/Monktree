window.onload = function () {
  const cont = document.getElementById("aaa");
  const button = document.getElementById("add");
  const submit = document.getElementById("contact-submit");
  const content = document.getElementById("i");
  button.onclick = function () {
    console.log("hello");
    cont.innerHTML += `
    <fieldset class="user" id="o">
            <input
            id="a"
              placeholder="Organization name"
              type="text"
              tabindex="5"s
              required
            />
          </fieldset>

          <fieldset class="user">
            <input id="b" placeholder="Role.." type="text" tabindex="5" required />
          </fieldset>

          <fieldset id="oo" class="user">
            From
            <input id="c" placeholder="from date" type="date" tabindex="5" required />

            - To
            <input id="d" placeholder="from date" type="date" tabindex="5" required />
            <input id="e" type="radio" /> Present
          </fieldset>

          <fieldset class="user">
            <textarea
            id="f"
              placeholder="Description(Optional)"
              tabindex="5"
            ></textarea>
          </fieldset>
    `;
  };
  submit.onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e");
    var f = document.getElementById("f").value;

    content.innerHTML += ` <br> Organization name : `;
    content.innerHTML += a;
    content.innerHTML += `<br>Role : `;
    content.innerHTML += b;
    content.innerHTML += `<br>From : `;
    content.innerHTML += c;
    content.innerHTML += ` To : `;
    content.innerHTML += d;

    if (e.checked) {
      content.innerHTML += e.value;
    }

    content.innerHTML += `<br> Description : `;
    content.innerHTML += f;
  };
};
