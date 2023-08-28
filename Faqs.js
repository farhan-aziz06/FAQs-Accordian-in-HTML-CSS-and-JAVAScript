const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian=>{
    const icon = accordian.querySelector('.icon');
    const answers = accordian.querySelector('.answer');

    // accordian.addEventListener('click' , ()=>{
    //     icon.classList.toggle('active');
    //     answers.classList.toggle('active');
    // })

    accordian.addEventListener('click' ,()=>{
        if(icon.classList.contains('active'))
        {
            icon.classList.remove('active');
            answers.style.maxHeight = null;
        }
        else
        {
            icon.classList.add('active');
            answers.style.maxHeight = answers.scrollHeight+'px';
        }
    })
})