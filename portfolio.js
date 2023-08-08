window.onscroll = function(){ myfunction() };

function myfunction(){
    if(document.documentElement.scrollTop > 50){
        document.getElementsByTagName('nav')[0].style.backgroundColor = "rgba(0, 0, 0, 0.914)";
        document.getElementsByTagName('a')[0].style.color = "white";
        document.querySelectorAll(".bars")[0].style.backgroundColor = "white";
        document.querySelectorAll(".bars")[1].style.backgroundColor = "white";
        document.querySelectorAll(".bars")[2].style.backgroundColor = "white";
        for(let i=0;i<=3;i++){
            document.getElementsByClassName('nav-link')[i].style.color = "white";
        }
    }
    else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = "white";
        document.getElementsByTagName('a')[0].style.color = "black";
        document.querySelectorAll(".bars")[0].style.backgroundColor = "black";
        document.querySelectorAll(".bars")[1].style.backgroundColor = "black";
        document.querySelectorAll(".bars")[2].style.backgroundColor = "black";
        for(let i=0;i<=3;i++){
            document.getElementsByClassName('nav-link')[i].style.color = "black";
        }
    }
}

document.querySelector(".toggle").addEventListener("click",()=>{
    document.querySelector("input").toggleAttribute("checked");
})
