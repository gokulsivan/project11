var c1a=document.getElementById("c1name");
var c1b=document.getElementById("c1dept");
var c1c=document.getElementById("c1year");
var c1d=document.getElementById("c1party");
var c1e=document.getElementById("c1promises");

var c2a=document.getElementById("c2name");
var c2b=document.getElementById("c2dept");
var c2c=document.getElementById("c2year");
var c2d=document.getElementById("c2party");
var c2e=document.getElementById("c2promises");

var c3a=document.getElementById("c2name");
var c3b=document.getElementById("c2dept");
var c3c=document.getElementById("c2year");
var c3d=document.getElementById("c2party");
var c3e=document.getElementById("c2promises");


function loadDoc() {
  var e = document.getElementById("inputOption");
  var text = e.options[e.selectedIndex].text
  if(text!="Filter BY Position"){
    console.log("Hello")
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/getCandidate", true);
    xhttp.setRequestHeader("Content-type", "application/JSON");
    
    var obj={"position":text}
    var json=JSON.stringify(obj)
    xhttp.send(json);
    xhttp.onreadystatechange = function() {
    console.log("hi")
      if (this.readyState == 4 && this.status == 200) {
        var myJSON = (this.responseText);
        var jsonResponse = JSON.parse(myJSON);
      
        c1a.innerHTML=jsonResponse[0]["name"]
        c1b.innerText=jsonResponse[0]["department"]
        c1c.innerText=jsonResponse[0]["year"]
        c1d.innerText=jsonResponse[0]["party"]
        c1e.innerHTML=jsonResponse[0]["promise"]

        c2a.innerHTML=jsonResponse[1]["name"]
        c2b.innerText=jsonResponse[1]["department"]
        c2c.innerText=jsonResponse[1]["year"]
        c2d.innerText=jsonResponse[1]["party"]
        c2e.innerHTML=jsonResponse[1]["promise"]

        c3a.innerHTML=jsonResponse[2]["name"]
        c3b.innerText=jsonResponse[2]["department"]
        c3c.innerText=jsonResponse[2]["year"]
        c3d.innerText=jsonResponse[2]["party"]
        c3e.innerHTML=jsonResponse[2]["promise"]
        }
      } 
    }
    else{
      alert("Enter a valid Position")
  }
  
}