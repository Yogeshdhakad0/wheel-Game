let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.wheel');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
value += Math.ceil(Math.random() * 3600);

}