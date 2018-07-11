//function getfile(file,callback){
  //var xhr=new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange=function(){
  //  if(xhr.readyState === 4 && xhr.status == "200"){
    //  callback(xhr.responseText);
      //  }
  //};
  //xhr.send(null);
//}
//getfile("data.json",function(text){
  //var data=JSON.parse(text);
  //console.log(data);
//})
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
education(data.education);
skills(data.skills);
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
function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="education qualification";
  childTwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  educationHeading.appendChild(hr);
  for(var i=0;i<edu.length;i++){
    var eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childTwo.appendChild(eduU1);
    var eduU2=document.createElement("ul");
    var eduFi=document.createElement("li");
    eduU2.appendChild(eduFi);
    childTwo.appendChild(eduU2);
  }
}
function skills(skillInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="technical skills";
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var skillTable=document.createElement("table")
  childTwo.appendChild(skillTable);
  skillTable.border="1";
  var tableData="";
  for(var i=0;i<skillInfo.length;i++)
  {
    tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>"
  }
  skillTable.innerHTML=tableData;
}
