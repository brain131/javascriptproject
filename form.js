//function to calcilate age

function calculate(age){
let months=age*12;
return months;
}

//submit function
function display(){
let name=document.getElementById("name").value;
let date=document.getElementById("date").value;
let age =document.getElementById("age").value;
let months=calculate(age);

//local storage
localStorage.setItem("name",name);
let savedName=localStorage.getItem("name");



//if statement
if(age>=18){
document.getElementById("text").innerHTML=name + " your age is " + age +
            ". You are an adult. Age in months: " + months;
 
}
else{
document.getElementById("text").innerHTML= name + " your age is " + age +
            ". You are an adult. Age in months: " + months;

}


}
window.onload =()=>{

document.getElementById("name").value=localStorage.getItem("name") || "";

};







