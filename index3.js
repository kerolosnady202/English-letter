var loadEventArray=[];
var unloadEventArray=[];
var generateEventArray=[];
var showEventArray=[];
if(window.localStorage.getItem("loadEvent")){
  loadEventArray=JSON.parse(window.localStorage.getItem("loadEvent"))
}
if(window.localStorage.getItem("unloadEvent")){
  unloadEventArray=JSON.parse(window.localStorage.getItem("unloadEvent"))
}
if(window.localStorage.getItem("generateEvent")){
  generateEventArray=JSON.parse(window.localStorage.getItem("generateEvent"))
}
if(window.localStorage.getItem("showEvent")){
  showEventArray=JSON.parse(window.localStorage.getItem("showEvent"))
}
function setdata(eventName,target) {
  this.eventName=eventName;
  this.eventTimeStamp=new Date().toString();
  this.eventTarget=target;
}

var tex=document.getElementById("letnum");
var show=document.getElementById("show");
var div1=document.getElementById("mess");
var div2=document.getElementById("img");
show.addEventListener("click",function(obj){
    var generateevent =new setdata("generateClick",obj.target.textContent)
    generateEventArray.push(generateevent)
    window.localStorage.setItem("generateEvent",JSON.stringify(generateEventArray));
    div2.innerHTML="";
    if(tex.value<=26 && tex.value>0){
      var letnum=[];
      var letternumber=parseInt(tex.value);
      for (let index = 0; index < letternumber; index++) {
        var letterindex= Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        if(letnum.includes(letterindex)){
            index--;
        }else{
            letnum.push(letterindex);
        } 
      }
      div1.innerHTML="";
      for (let index = 0; index < letnum.length; index++) {
         var letter=document.createElement("button");
         letter.textContent=String.fromCharCode(letnum[index]);
         letter.className="letters";
         div1.appendChild(letter);
      }
      var letters=document.getElementsByClassName("letters");
      var createnewimage=document.createElement("img");
      div2.appendChild(createnewimage)
      for (let index = 0; index < letters.length; index++) {
        letters[index].addEventListener("click",function(obj) {
            var showevent =new setdata("showClick",obj.target.textContent)
            showEventArray.push(showevent)
            window.localStorage.setItem("showEvent",JSON.stringify(showEventArray));
            
           createnewimage.src="images/"+letters[index].textContent+".jpg";
           createnewimage.width=300;
           createnewimage.height=300;
         })
         
      }
   
    }else{
    div1.textContent="please enter correct number";
    div2.innerHTML="";
    }
})
window.addEventListener("load",function (obj) {
  var loadevent=new setdata("load",obj.target)
  loadEventArray.push(loadevent);
  window.localStorage.setItem("loadEvent",JSON.stringify(loadEventArray));
 
})
window.addEventListener("unload",function (obj) {
  var unloadevent=new setdata("unload",obj.target)
  unloadEventArray.push(unloadevent);
  window.localStorage.setItem("unloadEvent",JSON.stringify(unloadEventArray));
 
})


