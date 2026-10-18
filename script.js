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




