// let box1=document.querySelector("#box1");
// onclick=()=>{
//     console.log("box1 was click");
//     let a =25;
//     a++;
//     console.log(a);
// };

// let box2=document.querySelector(".box2");
// box2.onmouseover=()=>{
//     console.log("you are inside in box ");

// };
// Event Object use the 
// let box1=document.querySelector("#box1");

// box1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX,evt.clickY);
// };
//     // 
//     let box2=document.querySelector(".box2");
//     box2.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX,evt.clickY);
//     };

            // Event Listeners
            let box2=document.querySelector(".box2");

            box2.addEventListener("click",()=>{
                console.log("hello")
            });
//      Acces the Object in Event
                // 
            // box2.addEventListener("click",(evt)=>{
            //     console.log(evt)
            // });

//  USED to Remove the Event
const handler3 =()=>{
    console.log("buttton1");
};
box2.addEventListener("click",handler3)
box2.addEventListener("clicl",()=>{
    console.log("Click handlewr3");
});
box2.removeEventListener("click",handler3);