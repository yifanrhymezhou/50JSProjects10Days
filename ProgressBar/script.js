/*
    const $ = v => document.querySelector(v);
    const $$ = v => document.querySelectorAll(v);
*/

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circleElements = document.querySelectorAll(".circle");
// n buttons; n-1 progress bars
const min = 0;
const max = circleElements.length - 1;

let currentActive = 0;



nextBtn.addEventListener("click", () => {
    if(nextBtn.classList.contains("disabled"))return;
    if(currentActive >= max-1){
        nextBtn.classList.add("disabled");
        nextBtn.classList.remove("active");
        
    }
    if (currentActive <= max - 1){
        currentActive++;
    }
    if (currentActive > 0){
        prevBtn.classList.add("active");
        prevBtn.classList.remove("disabled");
        
    }
    update();
})
prevBtn.addEventListener("click", () => {
    if (prevBtn.classList.contains("disabled"))return;
    if (currentActive <= 1){
        prevBtn.classList.add("disabled");
        prevBtn.classList.remove("active");
    }
    if(currentActive > 0){
        currentActive--;
    }
    if(currentActive<=max-1){
        nextBtn.classList.add("active");
        nextBtn.classList.remove("disabled");
    }
    update();
})

/*
function handleClass(element){
    let methods = {
        addClass,
        removeClass
    };
    function addClass(n){
        element.classList.add(n);
        return methods;
    }
    function removeClass(n){
        element.classList.remove(n);
        return methods;
    }
    return methods;
}
*/

function update(){
    circleElements.forEach((item, index) => {
        if (index <= currentActive){
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
    progress.style.width = (100 / max * currentActive).toFixed(4) + '%';
}