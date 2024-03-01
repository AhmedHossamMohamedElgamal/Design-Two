let toggle = document.querySelector(".toggle-menu");
let nav = document.querySelector("header nav ul");
let closed = document.querySelector(".close");
toggle.onclick = function(){
    nav.classList.add("open")
}
closed.onclick = function(){
    nav.classList.remove("open")
}
/*********   increase number for after  about page ************* */
let section_state =  document.querySelector(".stat");
let nums = document.querySelectorAll(".number");
let start = false;
let start1 = false;
let section_prog = document.querySelector(".skills")
let rich = document.querySelectorAll(".rich");
let section_price = document.querySelector(".pricing")
let progress = document.querySelectorAll(".prog span")
console.log(progress)

window.onscroll = function(){
    if(window.scrollY >= section_state.offsetTop-300){
        if(!start){
            nums.forEach((n)=>{
                increase_number(n)
            });
        }
        start = true
    }
    if(window.scrollY >= section_prog.offsetTop-250){
        progress.forEach((ele)=>{
            ele.style.width = ele.dataset.prog
        })
    }
    if(window.scrollY >= section_price.offsetTop+200){
        if(!start1){
            rich.forEach((n)=>{
                increase_number(n)
            });
        }
        start1  = true;
    }
    
    
}
function increase_number(num){
    let goal = num.dataset.goal;
    let count = setInterval(()=>{
        num.textContent++;
        if(num.textContent === goal){
            clearInterval(count)
        }
    },goal / 3000)
}
