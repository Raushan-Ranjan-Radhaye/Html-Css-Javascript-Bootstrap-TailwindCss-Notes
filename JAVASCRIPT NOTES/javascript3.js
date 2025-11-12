// let modeBtn=document.querySelector("#mode");

// let currMode ="Light";//dark ;light

// modeBtn.addEventListener("click",() =>{
//     if(currMode === "light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else
//     {
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });

    //  We use the css file code in apply to dark mode or light mode \
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode ="Light";//dark ;light
modeBtn.addEventListener("click",() =>{
    if(currMode === "light"){
        currMode="dark"
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
     console.log(currMode);
});