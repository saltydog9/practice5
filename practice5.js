var a=0,b=0,c=0,d=0,arry=[],may=[],ray=[],say=[];

bo1=document.querySelector("#bo1");
bo2=document.querySelector("#bo2");
bo3=document.querySelector("#bo3");
bo4=document.querySelector("#bo4");
bo5=document.querySelector("#bo5");
bo6=document.querySelector("#bo6");
bo7=document.querySelector("#bo7");
bo8=document.querySelector("#bo8");
bo9=document.querySelector("#bo9");
b10=document.querySelector("#b10");
b11=document.querySelector("#b11");
b12=document.querySelector("#b12");
b13=document.querySelector("#b13");
b14=document.querySelector("#b14");
b15=document.querySelector("#b15");

 document.addEventListener("keydown",function(event){
   var x=event.key;
   if(x=="i"){
     fun1();
   }
   else if(x=="u"){
     fun2();
   }
   else if(x=="o"){
     fun3();
   }
   else if(x=="p"){
     fun4();
   }
   else{
     a=0;
   }
   b11.innerHTML=k;
 })

 function fun1() {


    for(var i=0;i<=100;i++) {
    var rand=Math.floor(Math.random() *100);
    if(rand<=25){
      bo2.innerHTML=rand;
      arry.push(rand);

    }
    else if(rand<=50 && rand >25){
      bo3.innerHTML=rand;
      may.push(rand);

    }
    else if(rand<=75 && rand > 50){
      bo4.innerHTML=rand;
      ray.push(rand);
       
    }
    else{
      bo5.innerHTML=rand;
      say.push(rand);
      }
      }
    }
  function fun2(){
   bo6.innerHTML=arry;
   bo7.innerHTML=may;
   bo8.innerHTML=ray;
   bo9.innerHTML=say;
}
function fun3(){
  b11.innerHTML=arry.length;
  b12.innerHTML=may.length;
  b13.innerHTML=ray.length;
  b14.innerHTML=say.length;

}
function fun4(){
  bo2.innerHTML="";
  bo3.innerHTML="";
  bo4.innerHTML="";
  bo5.innerHTML="";
  bo6.innerHTML="";
  bo7.innerHTML="";
  bo8.innerHTML="";
  bo9.innerHTML="";
  b10.innerHTML="";
  b11.innerHTML="";
  b12.innerHTML="";
  b13.innerHTML="";
  b14.innerHTML="";
  b15.innerHTML="";

}


// var a = 0,
//   b = 0,
//   c = 0,
//   d = 0,
//   arry = [],
//   may = [],
//   ray = [],
//   say = [];
//
// bo1 = document.querySelector("#bo1");
// bo2 = document.querySelector("#bo2");
// bo3 = document.querySelector("#bo3");
// bo4 = document.querySelector("#bo4");
// bo5 = document.querySelector("#bo5");
// bo6 = document.querySelector("#bo6");
// bo7 = document.querySelector("#bo7");
// bo8 = document.querySelector("#bo8");
// bo9 = document.querySelector("#bo9");
// b10 = document.querySelector("#b10");
// b11 = document.querySelector("#b11");
// b12 = document.querySelector("#b12");
// b13 = document.querySelector("#b13");
// b14 = document.querySelector("#b14");
// b15 = document.querySelector("#b15");
//
// document.addEventListener("keydown", function (event) {
//   var x = event.key;
//   if (x == "i") {
//     fun1();
//   } else if (x == "u") {
//     fun2();
//   } else if (x == "o") {
//     fun3();
//   }
// });
// function fun1() {
//     for(var i=0;i<=100;i++){
//   var rand = Math.floor(Math.random() * 100);
//     if(rand <=25){
//         bo2.innerHTML=rand;
//         arry.push(rand);
// }
//     else if(rand<=50 && rand > 25) {
//         bo3.innerHTML=rand;
//         may.push(rand);
//     }
//     else if(rand<=75 && rand > 50){
//         bo4.innerHTML=rand;
//         ray.push(rand);
//     }
//     else {
//         say.push(rand);
//         bo5.innerHTML=rand;
//     }
//
// }
// }
// function fun2(){
//     bo6.innerHTML=arry;
//     bo7.innerHTML=may;
//     bo8.innerHTML=ray;
//     bo9.innerHTML=say;
// }
// function fun3() {
//     b11.innerHTML=arry.length;
//     b12.innerHTML=may.length;
//     b13.innerHTML=ray.length;
//     b14.innerHTML=say.length;
// }
// function fun4() {
//     in1=parseInt(inp1.value);
//     c=(5/9) * (in1-32);
//     c=Math.floor(c);
//     b15.innerHTML=c;
// }
// function fun5(){
//         a++;
//         var vv=document.querySelectorAll(".box").length;
//         for(i=1;i<=vv;i++){
//             if(a%2==0){
//              document.querySelectorAll(".box")[i].style.backgroundColor="orange";
//             }
//             else {
//                 document.querySelectorAll(".box")[i].style.backgroundColor="purple"
//             }
//         }
//     }
