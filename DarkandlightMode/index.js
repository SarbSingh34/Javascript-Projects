let themetoggler = document.getElementById('theme-toggler');
let body = document.querySelector('body')


themetoggler.onclick = () =>
{
    themetoggler.classList.toggle('fa-sun');
     if(themetoggler.classList.contains('fa-sun'))
     {
        document.body.classList.add('active');
     }
     else{
            document.body.classList.remove('active');
        }
}
     
// toggle.addEventListener('click',() =>
// {
//      this.classList.toggle('fa-moon');
//      if(this.classList.toggle('fa-sun'))
//      {
//         body.style.background = 'white';
//         body.style.color = 'black';
//      }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//      }
// })