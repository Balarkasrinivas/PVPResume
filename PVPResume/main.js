//function getfile(file,callbacK){
  //var xhr=new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
//xhr.onreadystatechange=function(){
  //if(xhr.readyState===4 && xhr.status=="200"){
    //callback(xhr.responseText);
    //}
//};
//xhr.send(null);
//}
//getfile("data.json",function(text){
  //var data=JSON.parse(text);
  //console.log(data);
  //})
  function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
        }else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
console.log(data);
career(data.career);
})

var childTwo=document.querySelector(".childtwo");
function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerObj.info;
childTwo.appendChild(careerP);
}
