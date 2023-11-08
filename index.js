let moon = document.getElementById("moonDiv");
let sun = document.getElementById("sunDiv");
let night = function(){
    sun.style.transition = "6s";
    sun.style.marginTop = "-80px";
    sun.style.backgroundColor = "rgb (236, 226, 76)";
    moon.style.transition = "8s";
    moon.style.marginLeft = "120px";
    document.body.style.transition = "11s";
    document.body.style.backgroundColor = "#e4e4ff";
}

setTimeout(()=>{
    night()
}, 1000
)
