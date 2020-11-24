var v= document.getElementById('message')
var x=sessionStorage.getItem("username")
console.log(x);
v.innerText="Welcome   "+x;