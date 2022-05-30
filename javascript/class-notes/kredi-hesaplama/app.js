console.log('**** Kredi Hesaplama *******');


const select=document.querySelector('.form-select');
const vade=document.querySelector('#vade');
const tutar=document.querySelector('#tutar');

const hesaplaBtn=document.querySelector('.btn')

let oran=0;


hesaplaBtn.addEventListener('click',(e)=>{
    if(select.value==='Konut Kredisi'){
        oran=1.29;

    }
    else if(select.value==='Ihtiyac Kredisi'){
        oran=1.99;

    }
    else if(select.value==='Arac Kredisi'){
        oran=1.79;

    }
    console.log(oran);
})