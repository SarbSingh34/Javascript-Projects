let tabs = document.querySelectorAll('.tabs_toggle');
let contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab,index) =>
{       
    tab.addEventListener('click',() => 
    {  
         // It will  change Content 
        //  Remove active class from all
        // Add active class to the clicked one
        contents.forEach((content) =>
        {
            content.classList.remove('is-active');
        })
        contents[index].classList.add('is-active');

        // It  will change tab with color 
        // First remove  active from all 
        tabs.forEach((tab) =>
        {
            tab.classList.remove('is-active');
        })
        // Put tab byDefault at First index = 0 and add class active
        tabs[index].classList.add('is-active');

    })
})