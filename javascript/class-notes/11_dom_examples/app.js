console.log('**** app.js *******');


const inputLang=document.querySelector('.languages');
const addBtn=document.getElementById('add');
const deleteBtn=document.getElementById('delete')


const langSection=document.getElementById('lang-section')


const ulCreate=document.createElement('ul');
langSection.appendChild(ulCreate);

console.log(langSection.children[0]);



//? SELECTORS
//************************************************* */
/*console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild;
const h1 = ul.closest('.container').firstElementChild;
console.log(h1);
h1.style.color = 'red';

//?container class ı içerisindeki btn class'ına ait olan elementleri arar.
const buttons = ul.closest('.container').querySelectorAll('.btn');
console.log(buttons);*/
//************************************************* */



//! addbtn 
addBtn.addEventListener('click', () => {

    if (!inputLang.value){
        alert("Please enter a add languages");
    }
    else {
        ulCreate.innerHTML+=`<li>${inputLang.value}<li>`;
        inputLang.value="";
        JavascriptKontrol();
    }
        
})


const JavascriptKontrol=()=>{
    document.querySelectorAll("ul li").forEach((dil)=>{
       const kucukHarf=dil.textContent.toLocaleLowerCase();
        if(kucukHarf==="javascript"){
            //dil.className='red';
            dil.setAttribute('class','red')

        } 
    })
}

//! delete btn fonksiyonu
deleteBtn.onclick=function(){
    ulCreate.childElementCount>0
    ? ulCreate.removeChild(ulCreate.lastElementChild)
    :alert('Silinecek eleman kalmadı')
}



//! enter and delete tuşlarıyla işlem yapma
inputLang.addEventListener('keydown',(e)=>{
if(e.code==='Enter'){
addBtn.click()

}
if(e.keyCode===108){
    deleteBtn.onclick();
}

})

//inputLang.focus() or

window.onload=()=>{
    JavascriptKontrol();
    inputLang.focus();

}




