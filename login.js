var v1=document.getElementById('box1')
var v2=document.getElementById('username')
var v3=document.getElementById('password')
var v4=document.getElementById('message')
var xhttp = new XMLHttpRequest();
v1.addEventListener('submit',function(event){
    if(v2.value && v3.value){
        event.preventDefault()
		xhttp.open("POST", "http://localhost:3000/studentLogin", true);
		xhttp.setRequestHeader("Content-type", "application/JSON");
		var postbody={"_id":v2.value,"password":v3.value}
		var json=JSON.stringify(postbody)
		xhttp.send(json)
    }
    else{
        alert("Enter Both Username and Password")
    }
})

xhttp.onreadystatechange = function() {
	console.log("hi")
    var myJSON = JSON.parse(this.responseText);
  if (this.readyState == 4 && this.status == 200) {
    console.log(myJSON)
        if(myJSON["username"]=='Admin'){
           window.location.href=window.location.href="D:/Design/DESIGN_UI/adminnew.html";
            sessionStorage.setItem("username", "Admin");
        }
        else{
        window.location.href=window.location.href="D:/Design/DESIGN_UI/votingpage.html";
        sessionStorage.setItem("username", myJSON["username"]);
        }
	
  }
  else if(this.status == 401){
    console.log(myJSON["message"])
    alert(myJSON["message"])
  }
}