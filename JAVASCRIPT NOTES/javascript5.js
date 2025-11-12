// // class Toyotacar{
// //     start() {
// //         console.log("start");
// //     }

// //     stop() {
// //         console.log("stop");
// //     }

// //     setBrand(brand) {
// //         this.brandName = brand;
// //     }
// // }

// // let fortuner = new Toyotacar ();//add the object
// // fortuner.setBrand("fortuner");
// // let lexus = new Toyotacar();//add the object
// // lexus.setBrand("lexus");

// // constructors+

// // class Toyotacar{
// //     constructor (brand) {
// //         console.log("creting a new object");
// //         this.brand = brand;
// //         this.milage = milage;
// //     }
// //     start() {
// //         console.log("start");
// //     }

// //     stop() {
// //         console.log("stop");
// //     }

// //     setBrand(brand) {
// //         this.brandName = brand;
// //     }
// // }

// // let fortuner = new Toyotacar ("fortuner",10);//constructor
// // console.log("fortuner");
// // let lexus = new Toyotacar("lexus",10);// constructor
// // console.log("lexus");








// //      INhertance Class 

// // class parent {
// //     hello() {
// //         console.log("hello");
// //     }
// // }

// // class Child extends parent {

// // }
 
// // let obj = new Child();

// class person {
//     constructor() {
//         this.species = "homo Sapines"
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep (){
//         console.log("sleep[");
//     }
//     work() {
//         console.log("Do nothing");
//     }
// }

// class Engineer extends person {//Extends it is used to simpley attached the two class each other 
//     work (){//this position we write the wof or used something
//         console.log("solve problem, bulid something");
//     }
// }
// //  shardhaObj = new Engineer();// we write the object in a givrn class to be insert in a class


// class Doctor extends person {//Extends it is used to simpley attached the two class each other 
//     work (){//this position we write the wof or used something
//         console.log("patient problem, bulid something");
//     }
// }
// let shardhaObj = new Engineer();// we write the object in a givrn class to be insert in a class



//  Super Keywoad

class person {
    constructor() {
        console.log("enter parents constructr")
        this.species = "homo Sapines"
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends person {
    constructor(branch){
        console.log("enter child constructor")
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructoer ")
    }
    work(){
        console.log("solve this problem");
    }
}

let engObj = new Engineer("Chemical Engineer");
