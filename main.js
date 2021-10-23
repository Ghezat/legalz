const btnToggle = document.querySelector('.btn-Aside');

btnToggle.addEventListener('click' , ()=> {
   document.getElementById('menuGlobal').classList.toggle('active');
})