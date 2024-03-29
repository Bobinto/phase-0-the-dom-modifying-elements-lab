const li = document.createElement("li");
li.textContent = "Hi there!";
console.log(li.textContent);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const newHeader = document.getElementsByTagName("h1")[0];
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";

const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";

element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";
element.classList.remove("dog");
element.classList.add("cat", "sale");

const someElement = element.parentNode;
someElement.removeChild(element);

const ul = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

ul.remove();
