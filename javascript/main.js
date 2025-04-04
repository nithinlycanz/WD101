/*a password should have atleast 8 characters
if it does not have 8 characters then it is weak */
// let pass="lolman@123"
// if(pass.length>=8){
//     console.log("Password is strong");

// }else {
//     console.log("Password is weak");
// }

/* gmail address should not be used for the registration
if the email address contains @gmail.com then it should not be used */
// let email = "abdc@lol.com";
// let Gmail = email.includes("@gmail.com");

// if(Gmail){
//     console.log("this is a gmail address this cannot be used");
// }else{
//     console.log("this can be use as this is not a gmail address");
// }

// let pass1 = "lolman@123";
// let pass2 = "lolma@123";

// if(pass1===pass2){
//     console.log("password matched");
// }else{
//     console.log("pass1"+pass1);
//     console.log("pass2"+pass2);
//     console.log("password does not match");
// }

//array
// let countires = ["india","london","canada","australia"]
// console.log(countires);
// countires.sort();
// console.log(countires);

//splitting string

// let essay = "lorem ipsum dolor sit amet consectetur adipiscing elit";
// let words = essay.split(" ");
// let count = words.length;
// console.log(count);

//password validation
// rules :
// 1. password should have atleast 8 characters
// 2. password should match the confirm password
// let pass = "lol@1234";
// let confirmPass = "lol@1234";

// let passMatch = pass === confirmPass;
// let passLength = pass.length >=8 ;

// let validPass = passMatch && passLength;

// if(validPass){
//     console.log("password is valid");
// } else {
//     console.log("password is invalid");

//  if(!passMatch){
//     console.log("The passwords don't match");

//  }

//  if(!passLength){
//     console.log("The password is not 8 characters long");
//  }
// }
let printpassstat = (pass1, pass2) =>{


    
     
    let passMatch= pass1 === pass2;
    
    let passlength = pass1.length >= 8;
    
    let passValid = passMatch && passlength;
    if (passValid){
        console.log("pass valid")
        }else{
            console.log("pass not valid")
    
            if (!passMatch){
                console.log("password don't match");
    
            }
    
            if (!passlength){
                console.log("password length should be 8 digits");
            }
    
        }
}
// let passwrd1= "12345678";
//     let passwrd2= "12345678";
// printpassstat(passwrd1, passwrd2);
printpassstat("lolaaemm", "lolaaemm");

let mane= "nithu" ;
let mane2= "nithu" ;
let lol = mane.concat(mane2);
console.log(lol);
let passwrd1= "12345678";
    let passwrd2= "12345678";

let lol1= passwrd1.concat(passwrd2);
let lol2 = lol1.split("");
console.log(lol2);
let lol3 = ["banana" ,"apple",  "cherry"];
console.log(lol3);
lol2.sort();
console.log(lol2);