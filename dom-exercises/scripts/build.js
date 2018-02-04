
let div = document.createElement("div");
div.id = "java";
let existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(div);


let header = document.createElement("h2");
let line = document.createTextNode("Övning 4");
header.appendChild(line);
div.appendChild(header);

let paragraph = document.createElement("p");
let text = document.createTextNode("Hello World");
paragraph.appendChild(text);
div.appendChild(paragraph);

let image = document.createElement("img");
image.setAttribute("src", "http://www.sociologyworldforum.com/pictures/Graphik/Globus_247.gif");
div.appendChild(image);

