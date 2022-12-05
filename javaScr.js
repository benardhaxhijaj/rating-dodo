const btnRate = document.querySelector('.submit'),
rate = document.querySelector('.rate-section'),
thankYou = document.querySelector('.thank-section'),
selected = document.querySelector('selected'),
btnBack = document.querySelector('.btn-back');
const rateValue = document.getElementById('ratingNum');
const starBtn = document.querySelectorAll('.btn');

btnRate.addEventListener('click', (e)=> {
    e.preventDefault();
    thankYou.classList.remove('hidden');
    console.log('clicked');
    rate.style.display = 'none';
    if(rateValue.innerHTML == ''){
        rateValue.innerHTML = '5';
    }
    else{
        rateValue.innerHTML = '';
    }
    
});

btnBack.addEventListener('click', (e)=> {
    e.preventDefault();
    thankYou.classList.add('hidden');
    console.log('clicked');
    rate.style.display = 'block';
    rateValue.innerHTML = '';
});

starBtn.forEach((e)=> {
    e.addEventListener('click' , ()=>{
        rateValue.innerHTML = e.innerHTML;
    });
});