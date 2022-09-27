
let flag = 1;

function controller(x)
{
     flag = flag + x;
     slideshow(flag);
}

slideshow(flag);

function slideshow(num)
{
    let slides = document.getElementsByClassName('slide');

 //    When at last image jump to 0th 
    if(num == slides.length){
        flag = 0;
        num  = 0;
    }
    // for Getting last array image  
    if(num < 0)
    {
        flag  = slides.length - 1;
        num   = slides.length - 1;
    }

    for(let y of slides) {
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}