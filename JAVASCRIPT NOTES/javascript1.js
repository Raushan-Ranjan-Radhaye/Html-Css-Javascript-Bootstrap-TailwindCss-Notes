console.log("hello")
// alert("RAushan RAnjan")
// window.console.log("hello Raushan");
console.dir(document.body);
console.log(document.body);

console.dir(document.body);
// acees the element with the help of id
let heading=document.getElementById("heading");
console.log(heading);
// Access the element with the help of Class
let ranjan= document.getElementsByClassName("raushan");
console.log(ranjan);
console.dir(ranjan);
// Access the element with the help of tag:
let sangita=document.getElementsByTagName("buttton");
console.log(sangita);
console.dir(sangita);
//Acees the element with the help of Query fiest element:

let firstelement;
firstelement = document.querySelector("h1");
console.log(firstelement);
console.dir(firstelement);
//Access the all element with the help of Query:
let Allelement=document.querySelectorAll("p")
console.log(Allelement);
console.dir(Allelement);

//              USe the properties./
// innertText
let div=document.querySelector("div");
console.dir(div);

// attibutes+:
let id=div.getAttribute("id");
console.log(id);
//Set Attriutes It is used to change the Attributes value+:""
// let para=document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

// Style Attributes';';

let div1=document.querySelector("div");
// div.style.background="yellow"]\
box.style.background="white"//changr by attirureds';


//craete element or tag in js file without write html code 
let button=document.createElement("button");
button.innerText="Click me";//used to writ in button 
console.log(button);
//      Append Method >==Add the last position of element are add

// let box1=document.querySelector("div");
// box1.append(button);

// prepend ==; add the element in start positon 

// let box2=document.querySelector("div");
//  box2.prepend(button);

//  node.before ++++--[Add the element in a before start the tag]
// let box3=document.querySelector("div");
//  box3.before(button);

// node.after {Add the tag or element in aend of a div or any tag to outsisde }

// let box1=document.querySelector("div");
// box1.after(button);

// DElete element

;let para=document.querySelector("p");
para.remove();