//salutul
const name1 = document.getElementById("salut");
const btn1 = document.getElementById("btn");
const output1 = document.getElementById("output1");

function salut() {
  output1.innerHTML = `Salut <b> ${name1.value} </b>!`;
}
btn1.addEventListener("click", salut);

//ceasul
let x;
let time;
setInterval(() => {
  x = new Date();
  if (x.getMinutes() < 10 && x.getSeconds() < 10) {
    time = x.getHours() + ":0" + x.getMinutes() + ":0" + x.getSeconds();
    document.getElementById("time").innerHTML = time;
  } else if (x.getSeconds() < 10) {
    time = x.getHours() + ":" + x.getMinutes() + ":0" + x.getSeconds();
    document.getElementById("time").innerHTML = time;
  } else if (x.getMinutes() < 10) {
    time = x.getHours() + ":0" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById("time").innerHTML = time;
  } else {
    time = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById("time").innerHTML = time;
  }
}, 1000);

//varsta
function getAge() {
  const now = new Date();
  const currentY = now.getFullYear();
  const date = document.getElementById("start").value;
  const dob = new Date(date);
  const prevY = dob.getFullYear();
  let age = currentY - prevY;
  document.getElementById("age").innerHTML = `Ai ${age} ani!`;
}

//formular
const name2 = document.getElementById("name");
const fname = document.getElementById("fname");
const city = document.getElementById("city");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const output2 = document.getElementById("output2");
const btn2 = document.getElementById("btn2");
const forDelete = document.getElementById("forDelete");
const forDeleteH1 = document.getElementById("forDeleteH1");

function formular() {
  forDelete.remove();
  forDeleteH1.remove();
  if (cat.checked && yes.checked) {
    output2.innerHTML = `Salut ${name2.value} ${fname.value} se pare ca e cam aglomerat in 
    ${city.value}! <br> Aceasta este o poza pentru tine deoarece ai spus ca iti plac dulciurile
     si pisicile: <img src="photos/CatSweets.png" alt="Cat eating sweets">`;
  } else if (cat.checked && no.checked) {
    output2.innerHTML = `Salut ${name2.value} ${fname.value} se pare ca e cam aglomerat in 
    ${city.value}! <br> Aceasta este o poza pentru tine deoarece ai spus ca nu iti plac dulciurile
     si iti plac pisicile: <img src="photos/CatVeg.png" alt="Cat eating vegetables">`;
  } else if (dog.checked && yes.checked) {
    output2.innerHTML = `Salut ${name2.value} ${fname.value} se pare ca e cam aglomerat in 
    ${city.value}! <br> Aceasta este o poza pentru tine deoarece ai spus ca iti plac dulciurile
     si cainii: <img src="photos/DogSweets.png" alt="Dog eating sweets">`;
  } else if (dog.checked && no.checked) {
    output2.innerHTML = `Salut ${name2.value} ${fname.value} se pare ca e cam aglomerat in 
    ${city.value}! <br> Aceasta este o poza pentru tine deoarece ai spus ca nu iti plac dulciurile
     si iti plac cainii: <img src="photos/DogVeg.png" alt="Dog eating vegetables">`;
  } else {
    output2.innerHTML = `Salut ${name2.value} ${fname.value} se pare ca e cam aglomerat in 
    ${city.value}! <br> Ti-am pregatit o poza bazata pe preferintele tale doar ca pentru aceasta 
    trebuie sa selectezi preferintele tale.<br> Te rog reimprospateaza pagina si completeaza formularul 
    inca o data`;
  }
}
btn2.addEventListener("click", formular);
