var v1=document.getElementById("box1")
var v2=document.getElementById("inputname")
var v3=document.getElementById("inputadmno")
var v4=document.getElementById("inputyear")
var v5=document.getElementById("inputdept")
var v6=document.getElementById("inputpassword")
var v7=document.getElementById("inputgender")
var v8=document.getElementById("inputemail")
var v9=document.getElementById("result")
var xhttp = new XMLHttpRequest();
v1.addEventListener('submit',function(event){
    if(v2.value && v3.value && v4.value && v5.value && v6.value && v7.value && v8.value)
	{		
		event.preventDefault();
		xhttp.open("POST", "http://localhost:3000/insertStudent", true);
		xhttp.setRequestHeader("Content-type", "application/JSON");
		var postbody={"_id":v3.value,"name":v2.value,"year":v4.value,"department":v5.value,"password":v6.value,"email_id":v8.value,"gender":v7.value}
		var json=JSON.stringify(postbody)
		console.log(json)
		xhttp.send(json)
	}
 	else{
 	 	alert("ENTER ALL VALUES")
 	 	event.preventDefault();
 	}
})
xhttp.onreadystatechange = function() {
	var myJSON = JSON.parse(this.responseText);
	console.log(myJSON["message"])
  	if ( this.status == 200) {
    alert("Registration Successful")
   
  	}
  	else{
    alert("Registration Failed")
   
  }
}

