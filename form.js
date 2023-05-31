const form = document.querySelector("form");
const outputName = document.querySelector("#output-name");
const outputEmail = document.querySelector("#output-email");
const outputContact = document.querySelector("#output-contact");
const outputAddress = document.querySelector("#output-address");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  outputName.textContent = form.elements.name.value;
  outputEmail.textContent = form.elements.email.value;
  outputContact.textContent = form.elements.contact.value;
  outputAddress.textContent = form.elements.address.value;
  form.reset();
});
// for language
const text1 = document.getElementById("language");
const btn = document.getElementById("lang-btn");
const list = document.getElementById("out-lang");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const note = document.createElement("li");
  note.innerHTML = text1.value;
  list.appendChild(note);
  text1.value = "";
  note.addEventListener("click", function () {
    note.remove();
    form.reset();
  });
});

// for education
const text2 = document.getElementById("education");
const btn2 = document.getElementById("edu-btn");
const list2 = document.getElementById("out-edu");
btn2.addEventListener("click", function (event) {
  event.preventDefault();
  const note2 = document.createElement("li");
  note2.innerHTML = text2.value;
  list2.appendChild(note2);
  text2.value = "";
  note2.addEventListener("click", function () {
    note2.remove();
    form.reset();
  });
});

// for projects
const text3 = document.getElementById("project");
const btn3 = document.getElementById("project-btn");
const list3 = document.getElementById("out-project");
btn3.addEventListener("click", function (event) {
  event.preventDefault();
  const note3 = document.createElement("li");
  note3.innerHTML = text3.value;
  list3.appendChild(note3);
  text3.value = "";
  note3.addEventListener("click", function () {
    note3.remove();
    form.reset();
  });
});

// for projects
const text4 = document.getElementById("experience");
const btn4 = document.getElementById("exp-btn");
const list4 = document.getElementById("out-exp");
btn4.addEventListener("click", function (event) {
  event.preventDefault();
  const note4 = document.createElement("li");
  note4.innerHTML = text4.value;
  list4.appendChild(note4);
  text4.value = "";
  note4.addEventListener("click", function () {
    note4.remove();
    form.reset();
  });
});

// for skills
const text5 = document.getElementById("skills");
const btn5 = document.getElementById("skills-btn");
const list5 = document.getElementById("out-skills");
btn5.addEventListener("click", function (event) {
  event.preventDefault();
  const note5 = document.createElement("li");
  note5.innerHTML = text5.value;
  list5.appendChild(note5);
  text5.value = "";
  note5.addEventListener("click", function () {
    note5.remove();
    form.reset();
  });
});

// for projects
const text6 = document.getElementById("reference");
const btn6 = document.getElementById("ref-btn");
const list6 = document.getElementById("out-ref");
btn6.addEventListener("click", function (event) {
  event.preventDefault();
  const note6 = document.createElement("li");
  note6.innerHTML = text6.value;
  list6.appendChild(note6);
  text6.value = "";
  note6.addEventListener("click", function () {
    note6.remove();
    form.reset();
  });
});

const prnt = document.getElementById("print");
prnt.addEventListener("click", function () {
  print();
});

const a = document.getElementById("btn");
const b = document.getElementById("section");
const c = document.getElementById("name");
const d = document.getElementById("email");
const e = document.getElementsByClassName("container");

a.addEventListener("click", function (e) {
  if (c.value != "" && d.value != "") {
    b.style.display = "block";
    e[1].style.display = "flex";
  }
});
