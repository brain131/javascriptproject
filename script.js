//function to calculate age in months

function calculate(age){
let months=age*12;
return months;
}

//submit function
function display(){
let name=document.getElementById("name").value;
let date=document.getElementById("date").value;
let age =document.getElementById("age").value;
let contact=document.getElementById("contact").value;
let months=calculate(age);
let greeting=document.getElementById("greeting").textContent;
//local storage
localStorage.setItem("name",name);
localStorage.setItem("date",date);
localStorage.setItem("age",age);
localStorage.setItem("contact",contact);

//if statement
if(age>=18){
document.getElementById("text").innerHTML=name + " your age is " + age +
            ". You are an adult. Age in months: " + months;
 
}
else{
document.getElementById("text").innerHTML= name + " your age is " + age +
            ". You are an adult. Age in months: " + months;

}
document.getElementById("greeting").innerHTML="Welcome back "+ name;
for(let i=0;i<5;i++){
document.getElementById("message").innerHTML +=name + " keep working hard<br>" ;

}

}
window.onload =()=>{

document.getElementById("name").value=localStorage.getItem("name") || "";
document.getElementById("age").value=localStorage.getItem("age") || "";
document.getElementById("date").value=localStorage.getItem("date") || "";
document.getElementById("contact").value=localStorage.getItem("contact") || "";

};
async function search() {
  try{
    const postId=document.getElementById("inputData").value;
const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if(!response.ok){
      throw new error("could not fetch resource");
    }
    const data=await response.json();
    console.log("Fetched post",data);
    document.getElementById("title").textContent=data.title;
    document.getElementById("body").textContent=data.body


  }
catch(error){
  console.log("Search error", error);
}  
    }

    
//start of class 

class money {
  #balance;
constructor(balance,accountNumber){
this.#balance=balance
this.accountNumber=accountNumber

}
deposit(amount){
this.#balance-=amount;

}
withdraw(amount){
if(amount>this.#balance){
  return "insufficient funds"

}
else{
    this.#balance=this.#balance-amount;
return `you have withdrawn ${amount} account balance is${this.#balance}`

}



}

}
function processAccount(){
let accountNumber=document.getElementById("accountNumber").value;
let balance=Number(document.getElementById("balance").value);
let deposit=Number(document.getElementById("deposit").value);
let withdraw=Number(document.getElementById("withdraw").value);
let b1=new money(balance,accountNumber);
let newBalance=(balance+deposit)-withdraw;
let depoBalance=balance+deposit;
if(accountNumber===""){
document.getElementById("message").innerHTML="enter a valid account number";
return;

}
if(withdraw>depoBalance){
  document.getElementById("message1").innerHTML="insufficient funds to withdraw";
  return false;
}
document.getElementById("message2").innerHTML=`your balance is ${balance}
 you deposited ${deposit} you withdrew ${withdraw} your new balance ${newBalance}`

}
//end of class and oop

//start of cookie
let firstName=document.getElementById("firstName");
let secondName=document.getElementById("secondName");

function submit(){
  setCookie("firstName",firstName.value,365);
  setCookie("secondName",secondName.value,365)
  setTimeout(()=>{
    window.location.href("welcome.html");
  
  },3000);

}

//end of cookie







