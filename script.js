let yellow=document.querySelector(".yellow");
let red=document.querySelector(".red");
let white=document.querySelector(".white");
let grey=document.querySelector(".grey");
let body=document.getElementsByTagName("body")[0];
let h1=document.getElementsByTagName("h1")[0];

yellow.addEventListener("click",function(){
    body.style.backgroundColor="yellow";
    h1.style.color="black"
})

red.addEventListener("click",function(){
    body.style.backgroundColor="red";
    h1.style.color="black"
})

white.addEventListener("click",function(){
    body.style.backgroundColor="white";
    h1.style.color="black"
})

grey.addEventListener("click",function(){
    body.style.backgroundColor="grey";
    h1.style.color="black"
})
