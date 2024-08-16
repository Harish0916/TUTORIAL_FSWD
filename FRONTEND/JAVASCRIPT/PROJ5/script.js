// var uname = "Madhuri"
// var friends = "All"

// document.writeln("<h1>","Name: ",uname, "</h1>")
// document.writeln(`<h2>No of friends: ${friends}</h2>`)
// ------------------
// let fname = "Aditya"
// let lname = "Thakur"
// document.write(`
//     <div style="background: "green">
//         <h1>${fname}</h1>
//         <h1>${lname}</h1>
//     </div>
//     `)
//-------------------------

// Scope
// let msg = "Edureka"     // global scope

// function outer() {
//     let msg = "Jetking"     // local scope
//     console.log(msg);
// }

// outer()
// console.log(msg);

//-------------------------
// let msg = "Edureka"     // global scope

// function outer() {
//     msg = "Jetking"     // local scope
//     console.log(msg);
// }

// outer()
// console.log(msg);


//--------------------

// let msg = "Edureka"     // global scope

// function outer() {
//     let msg = "Jetking"     // local scope
//     function inner() {
//         let msg = "Codingoes"       // lexical scope
//         console.log(msg);
//     }
//     inner()
//     console.log(msg);
// }
// outer()
// console.log(msg);

//-----------------------
// let is block scope
// {
//     let x = 10
// }
// console.log(x);
//---------------------
// let is block scope
// {
//     const x = 10
//     x = 12
// }
// console.log(x);
//-----------------------
// var is function scope
// function value(){
//     var x = 10
// }
// console.log(x);

///------------------