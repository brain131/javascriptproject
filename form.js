//funtion to cals

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








