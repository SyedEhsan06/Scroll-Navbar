let main = document.querySelector('.main');
let btn = document.querySelectorAll('.btn'); 
let btnontainer = document.querySelectorAll('.btn-container'); 
let sections = document.querySelectorAll('.sectionclass'); 
btn[0].classList.add('active');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        btn.forEach(btns => btns.classList.remove('active'));
        btn[i].classList.add('active');
    });
      
}
for (let i = 0; i <= sections.length; i++) {
    
window.addEventListener('scroll', () => {
    if(window.scrollY>=sections[i].offsetTop){
        btn.forEach(btns => btns.classList.remove('active'));
        console.log(sections[i].offsetTop)
        btn[i].classList.add('active');
    }
});

}
