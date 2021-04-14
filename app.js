// caputure elements
const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');




// events
toggle.onclick = function(){
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
}




// functions 